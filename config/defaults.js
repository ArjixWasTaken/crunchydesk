const defaultConfig = {
    "window-size": {
        width: 1100,
        height: 550,
    },
    url: "https://www.crunchyroll.com",
    options: {
        tray: false,
        appVisible: true,
        autoUpdates: true,
        hideMenu: false,
        disableHardwareAcceleration: false,
        restartOnConfigChanges: false,
        trayClickPlayPause: false,
        autoResetAppCache: false,
        resumeOnStart: true,
    },
    plugins: {
        // Enabled plugins
        adblocker: {
            enabled: true,
            cache: true,
            additionalBlockLists: [], // Additional list of filters, e.g "https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/filters.txt"
        },
        // Disabled plugins
        discord: {
            enabled: false,
            activityTimoutEnabled: true, // if enabled, the discord rich presence gets cleared when music paused after the time specified below
            activityTimoutTime: 10 * 60 * 1000, // 10 minutes
            watchAlong: true, // add a "watch along" button to rich presence
            hideDurationLeft: false, // hides the start and end time of the song to rich presence
        },
        notifications: {
            enabled: false,
            unpauseNotification: false,
            urgency: "normal", //has effect only on Linux
            interactive: false, //has effect only on Windows
        },
        "picture-in-picture": {
            enabled: false,
            alwaysOnTop: true,
            savePosition: true,
            saveSize: false,
            hotkey: "P",
        },
    },
};

module.exports = defaultConfig;
