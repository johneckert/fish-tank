# Fish Tank

A fun landing page for your browser.
[Visit on the Web](https://johneckert.github.io/fish-tank/)
[Install on Chrome](https://chromewebstore.google.com/detail/fish-tank/dfjafakpnbbgdhpbndbmailmbgadcolm)
## Installation

```bash
yarn install
```

## To run the project locally

```bash
yarn build
```
Then open dist/index.html in your browser.

## To publish to github pages
```bash
yarn build
yarn publish
```

## To release a new version to Chrome Web Store
1. Update the version in `manifest.json`
2. Tag the release with the version number (e.g. `v1.0.0`)
3. Push the tag to the remote repository

## Dependencies
- [Tween.js](https://github.com/tweenjs/tween.js)
- [Fitty](https://github.com/rikschennink/fitty)
- [WebPack](https://webpack.js.org/)