# Change Log

All notable changes to the project are listed here.

For more information visit:
https://github.com/codesbiome/electron-react-webpack-typescript-2021


### v4.1.0

- 🎉 Electron core upgraded  to version `v14`
- Update application style properties
- Enable `nativeWindowOpen` for main window
- Remove `enableRemoteModule` from main window
- Fix : Hot reloading issue caused by `liveReload` in webpack devServer
- Added additional Webpack `devServer` configuration in `tools/forge.config.js`
- Upgraded outdated deps:
    - `@electron-forge` deps upgraded to `6.0.0-beta.60`
    - `@typescript-eslint` deps upgraded to `^4.30.0`
    - `@types/react` upgraded to `^17.0.19`
    - `electron` upgraded to `^14.0.0`
    - `eslint-plugin-import` upgraded to `^2.24.2`
    - `eslint-plugin-react` upgraded to `^7.25.1`
    - `typescript` upgraded to `^4.4.2`
    - `webpack` upgraded to `^5.51.1`


### v4.0.1

- Update file-loader configuration for `assets` files
- Add packager configuration for app executable file details
- Update `README` with similar useful projects


### v4.0.0

- Overhaul for Application default layout and styling.
- Default window background color updated.
- Default `minimal` stats output for main & renderer process via webpack.
- Upgraded outdated deps :
    - `electron` upgraded to `^13.1.9`
    - `@electron-forge` packages upgraded to `6.0.0-beta.59`
    - `@typescript-eslint` packages upgraded to `^4.29.2`
    - `css-loader` upgraded to `^6.2.0`
    - `eslint` upgraded to `^7.32.0`
    - `fork-ts-checker-webpack-plugin` upgraded to `^6.3.2`
    - `less-loader` upgraded to `10.0.1`
    - `style-loader` upgraded to `^3.2.1`
    - `ts-loader` upgraded to `9.2.5`
    - `typescript` upgraded to `^4.3.5`
    - `webpack` upgraded to `^5.50.0`


### v3.1.0

- Electron core 🚀 upgraded to version 13.
- Expose Webpack Ports settings in forge configuration.
- Upgraded outdated packages :
    - `electron` upgraded to `^13.0.1`
    - `@typescript-eslint` packages upgraded to `^4.26.0`
    - `eslint` upgraded to `^7.27.0`
    - `css-loader` upgraded to `^5.2.6`
    - `ts-loader` upgraded to `8.3.0`
    - `typescript` upgraded to `^4.3.2`
    - `webpack` upgraded to `^5.38.1`
    - `fork-ts-checker-webpack-plugin` upgraded to `^6.2.10`


### v3.0.1

- Upgraded outdated packages
    - `electron'` upgraded to `^12.0.6`
    - `react` upgraded to `^17.0.2`
    - `react-dom` upgraded to `^17.0.2`
    - `css-loader` upgraded to `^5.2.4`
    - `eslint` upgraded to `^7.25.0`
    - `node-loader` upgraded to `2.0.0`
    - `ts-loader` upgraded to `8.2.0`
    - `typescript` upgraded to `^4.2.4`
    - `webpack` upgraded to `^5.36.2`


### v3.0.0

- Overhaul for Application component layout and styling.
- Project Files structure updated.
- Move static images to `assets` directory.
- Remove `.prettierignore` file.
- Use `.tsx` file extension for `preload` and `renderer` incase we need to use components.
- Introduce new `assets` webpack alias.
- Modify aliases usage for new project structure.
- Upgraded outdated dependencies
    - `electron` upgraded to `12.0.1`
    - `css-loader` upgraded to `5.1.3`
    - `eslint` upgraded to `7.22.0`
    - `less` upgraded to `4.1.1`
    - `less-loader` upgraded to `7.3.0`
    - `ts-loader` upgraded to `8.0.18`
    - `typescript` upgraded to `4.2.3`
    - `webpack` upgraded to `5.27.1`

### v2.1.0

- New Year 2021 🎉🎊
- Upgraded outdated dependencies
    - `electron` version upgraded to `11.1.1`
    - `react` version upgraded to `17.0.1`
    - `hot-loader` version upgraded to `17.0.1`
    - `webpack` version upgraded to `5.13.0`
    - `typescript` version upgraded to `4.1.3`
    - `ts-loader` version upgraded to `8.0.14`
    - `css-loader` version upgraded to `5.0.1`
    - `style-loader` version upgraded to `2.0.0`
    - `less` version upgraded to `4.1.0`

### v2.0.2

- Upgraded outdated dependencies
- `electron` version upgraded to `10.x`
- `typescript` version upgraded to `4.x`
- `less-loader` version upgraded to `7.x`

### v2.0.1

- Upgraded outdated dependencies

### v2.0.0

- Added electron window background color
- Devtools opening on startup is disabled
- Added `preload` script usage (preload.ts) 👍
- Moved webpack `aliases` to separate file
- Added new style & color changes to boilerplate layout
- Added prettier configuration files `.prettierrc` `.prettierignore`
- `contextIsolation` is enabled by default
- `nodeIntegration` `enableRemoteModule` `nodeIntegrationInWorker` `nodeIntegrationInSubFrames` are disabled default

### v1.0.0

- Upgrade package dependencies to latest
- Add hot module replacement (live reload)
- Add linting via ESLint
- Custom webpack configuration
- Custom forge configuration for package/bundle
- Add aliases for project paths
- Image loader to display images