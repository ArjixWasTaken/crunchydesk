const { registerCallback } = require("../../providers/webRequests");

module.exports = () => {
    // Preload adblocker to inject scripts/styles
    require("@cliqz/adblocker-electron-preload/dist/preload.cjs");

    registerCallback((xhr) => {
        console.log("Intercepted request: ", xhr.responseURL);
    });
};
