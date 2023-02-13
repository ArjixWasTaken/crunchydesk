/// <reference path="./routes/index.d.ts" />

const { registerCallback } = require("../../providers/webRequests");
const /**@type {Route[]}*/ routes = require("./routes");

const removeAllAdBreaks = (json) => {
    if (json && typeof json === "object") {
        if (Array.isArray(json.ad_breaks)) {
            json.ad_breaks = [];
        }

        Object.keys(json).forEach((key) => removeAllAdBreaks(json[key]));
    }
};

module.exports = () => {
    // Preload adblocker to inject scripts/styles
    require("@cliqz/adblocker-electron-preload/dist/preload.cjs");

    registerCallback(async (xhr) => {
        let json = {};

        // prettier-ignore
        try {
            json = JSON.parse(xhr.responseText);
        } catch (e) {  }

        removeAllAdBreaks(json);

        let handled = false;
        for (const route of routes) {
            if (route.predicate(xhr, json)) {
                await route.handler(xhr, json);
                handled = true;
            }
        }

        if (handled) {
            xhr.response = xhr.responseText = JSON.stringify(json);
        } else {
            console.log(
                "Unhandled request",
                xhr.responseURL,
                JSON.stringify(json)
            );
        }
    });
};
