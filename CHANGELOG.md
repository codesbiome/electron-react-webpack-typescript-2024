# Change Log

All notable changes to the project are listed here.

For more information visit:
https://github.com/codesbiome/electron-react-webpack-typescript-2021


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