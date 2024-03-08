# Fish Tank
<p float="left" >
<img alt="Screenshot 2024-03-08 at 2 16 46 PM" src="https://github.com/johneckert/fish-tank/assets/14866241/82ec4ff4-e309-438a-8369-3f22c91bce81" width="49%" />
<img alt="Screenshot 2024-03-08 at 2 16 12 PM" src="https://github.com/johneckert/fish-tank/assets/14866241/8249856f-35ed-4841-a989-6dc34160df50" width="49%" />
</p>

A fun and relaxing landing page for your browser.
- [Visit on the Web](https://johneckert.github.io/fish-tank/)
- [Install on Chrome](https://chromewebstore.google.com/detail/fish-tank/dfjafakpnbbgdhpbndbmailmbgadcolm)


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
- [Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
- [Tween.js](https://github.com/tweenjs/tween.js)
- [Fitty](https://github.com/rikschennink/fitty)
- [WebPack](https://webpack.js.org/)
