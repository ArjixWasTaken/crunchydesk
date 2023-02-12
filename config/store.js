const Store = require("electron-store");

const defaults = require("./defaults");

const setDefaultPluginOptions = (store, plugin) => {
    if (!store.get(`plugins.${plugin}`)) {
        store.set(`plugins.${plugin}`, defaults.plugins[plugin]);
    }
};

const migrations = {};

module.exports = new Store({
    defaults,
    clearInvalidConfig: false,
    migrations,
});
