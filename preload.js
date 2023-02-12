require("./providers/front-logger")();
require("./providers/webRequests").patch();

const config = require("./config");
const { fileExists } = require("./plugins/utils");
const { ipcRenderer } = require("electron");

const plugins = config.plugins.getEnabled();

let api;

plugins.forEach(async ([plugin, options]) => {
    const preloadPath = await ipcRenderer.invoke(
        "getPath",
        __dirname,
        "plugins",
        plugin,
        "preload.js"
    );
    fileExists(preloadPath, () => {
        const run = require(preloadPath);
        run(options);
    });

    const actionPath = await ipcRenderer.invoke(
        "getPath",
        __dirname,
        "plugins",
        plugin,
        "actions.js"
    );
    fileExists(actionPath, () => {
        const actions = require(actionPath).actions || {};

        // TODO: re-enable once contextIsolation is set to true
        // contextBridge.exposeInMainWorld(plugin + "Actions", actions);
        Object.keys(actions).forEach((actionName) => {
            global[actionName] = actions[actionName];
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    plugins.forEach(async ([plugin, options]) => {
        const pluginPath = await ipcRenderer.invoke(
            "getPath",
            __dirname,
            "plugins",
            plugin,
            "front.js"
        );
        fileExists(pluginPath, () => {
            const run = require(pluginPath);
            run(options);
        });
    });

    // wait for complete load of youtube api
    listenForApiLoad();

    // Add action for reloading
    global.reload = () => ipcRenderer.send("reload");
});

function listenForApiLoad() {
    api = document.querySelector("#movie_player");
    if (api) {
        onApiLoaded();
        return;
    }

    const observer = new MutationObserver(() => {
        api = document.querySelector("#movie_player");
        if (api) {
            observer.disconnect();
            onApiLoaded();
        }
    });

    observer.observe(document.documentElement, {
        childList: true,
        subtree: true,
    });
}

function onApiLoaded() {
    const video = document.querySelector("video");
    const audioContext = new AudioContext();
    const audioSource = audioContext.createMediaElementSource(video);
    audioSource.connect(audioContext.destination);

    video.addEventListener(
        "loadstart",
        () => {
            // Emit "audioCanPlay" for each video
            video.addEventListener(
                "canplaythrough",
                () => {
                    document.dispatchEvent(
                        new CustomEvent("audioCanPlay", {
                            detail: {
                                audioContext: audioContext,
                                audioSource: audioSource,
                            },
                        })
                    );
                },
                { once: true }
            );
        },
        { passive: true }
    );

    document.dispatchEvent(new CustomEvent("apiLoaded", { detail: api }));

    // Remove upgrade button
    if (config.get("options.removeUpgradeButton")) {
        const upgradeButton = document.querySelector(
            'ytmusic-pivot-bar-item-renderer[tab-id="SPunlimited"]'
        );
        if (upgradeButton) {
            upgradeButton.style.display = "none";
        }
    }

    // Force show like buttons
    if (config.get("options.ForceShowLikeButtons")) {
        const likeButtons = document.querySelector(
            "ytmusic-like-button-renderer"
        );
        if (likeButtons) {
            likeButtons.style.display = "inherit";
        }
    }
}
