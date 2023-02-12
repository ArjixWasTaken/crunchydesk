# CrunchyDesk

<div align="center">

[![GitHub release](https://img.shields.io/github/release/th-ch/youtube-music.svg?style=for-the-badge&logo=youtube-music)](https://github.com/th-ch/youtube-music/releases/)
[![GitHub license](https://img.shields.io/github/license/th-ch/youtube-music.svg?style=for-the-badge)](https://github.com/th-ch/youtube-music/blob/master/LICENSE)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=for-the-badge)](https://github.com/sindresorhus/xo)
[![Build status](https://img.shields.io/github/actions/workflow/status/th-ch/youtube-music/build.yml?branch=master&style=for-the-badge&logo=youtube-music)](https://GitHub.com/th-ch/youtube-music/releases/)
[![Known Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/th-ch/youtube-music?style=for-the-badge)](https://snyk.io/test/github/th-ch/youtube-music)
[![GitHub All Releases](https://img.shields.io/github/downloads/th-ch/youtube-music/total?style=for-the-badge&logo=youtube-music)](https://GitHub.com/th-ch/youtube-music/releases/)
[![AUR](https://img.shields.io/aur/version/youtube-music-bin?color=blueviolet&style=for-the-badge&logo=youtube-music)](https://aur.archlinux.org/packages/youtube-music-bin)

</div>

![Screenshot](web/screenshot.jpg "Screenshot")

<h4 align="center">This is a fork of [th-ch/youtube-music](https://github.com/th-ch/youtube-music)</h4>

<br />

#### Electron wrapper around Crunchyroll featuring:

-   Framework for custom plugins: change Crunchyroll to your needs (style, content, features), enable/disable plugins in one click

## Download

You can check out the [latest release](https://github.com/th-ch/youtube-music/releases/latest) to quickly find the latest version.

## Available plugins:

-   **Ad Blocker**: Block all ads and tracking out of the box

-   [**Discord**](https://discord.com/): Show your friends what you listen to with [Rich Presence](https://user-images.githubusercontent.com/28219076/104362104-a7a0b980-5513-11eb-9744-bb89eabe0016.png)

-   **Navigation**: Next/Back navigation arrows directly integrated in the interface, like in your favorite browser

-   **Notifications**: Display a notification when an episode starts playing ([interactive notifications](https://user-images.githubusercontent.com/78568641/114102651-63ce0e00-98d0-11eb-9dfe-c5a02bb54f9c.png) are available on windows)

-   **Picture in picture**: allows to switch the app to picture-in-picture mode

-   **Taskbar Media Control**: Control playback from your [Windows taskbar](https://user-images.githubusercontent.com/78568641/111916130-24a35e80-8a82-11eb-80c8-5021c1aa27f4.png)

## Dev

```sh
git clone https://github.com/ArjixWasTaken/crunchydesk
cd crunchydesk
yarn
yarn start
```

## Build your own plugins

Using plugins, you can:

-   manipulate the app - the `BrowserWindow` from electron is passed to the plugin handler
-   change the front by manipulating the HTML/CSS

### Creating a plugin

Create a folder in `plugins/YOUR-PLUGIN-NAME`:

-   if you need to manipulate the BrowserWindow, create a file `back.js` with the following template:

```node
module.exports = (win) => {
    // win is the BrowserWindow object
};
```

-   if you need to change the front, create a file `front.js` with the following template:

```node
module.exports = () => {
    // This function will be called as a preload script
    // So you can use front features like `document.querySelector`
};
```

### Common use cases

-   injecting custom CSS: create a `style.css` file in the same folder then:

```node
const path = require("path");
const { injectCSS } = require("../utils");

// back.js
module.exports = (win) => {
    injectCSS(win.webContents, path.join(__dirname, "style.css"));
};
```

-   changing the HTML:

```node
// front.js
module.exports = () => {
    // Remove the login button
    document.querySelector(".sign-in-link.ytmusic-nav-bar").remove();
};
```

-   communicating between the front and back: can be done using the ipcMain module from electron. See `utils.js` file and example in `navigation` plugin.

## Build

1. Clone the repo
2. Run `yarn` to install dependencies
3. Run `yarn build:OS`
    - `yarn build:win` - Windows
    - `yarn build:linux` - Linux
    - `yarn build:mac` - MacOS

Builds the app for macOS, Linux, and Windows, using [electron-builder](https://github.com/electron-userland/electron-builder).

## Tests

```sh
yarn test
```

Uses [Playwright](https://playwright.dev/) to test the app.

## License

MIT © [ArjixWasTaken](https://github.com/ArjixWasTaken/crunchydesk), [th-ch](https://github.com/th-ch/youtube-music)
