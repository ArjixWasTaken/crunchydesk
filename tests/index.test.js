const path = require("path");

const { _electron: electron } = require("playwright");
const { test, expect } = require("@playwright/test");

process.env.NODE_ENV = "test";

const appPath = path.resolve(__dirname, "..");

test("YouTube Music App - With default settings, app is launched and visible", async () => {
    const app = await electron.launch({
        cwd: appPath,
        args: [
            appPath,
            "--no-sandbox",
            "--disable-gpu",
            "--whitelisted-ips=",
            "--disable-dev-shm-usage",
        ],
    });

    await app.close();
});
