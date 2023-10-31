# BackToTop
BackToTop is a package with no dependencies to make simple "back to top" buttons.

## Table of Contents
- [Install](#install)
- [Usage](#usage)
- [Docs](#docs)
    - [`applyToElement(element, [options])`](#docs-applytoelement)
- [Note](#note)
- [License](#license)

## Install
Installing with npm:
```bash
npm i @axn/backtotop
```

## Usage
BackToTop makes use of ESM exports. Most bundlers can import the module directly like so:
```js
import * as BackToTop from '@axn/backtotop';

const element = document.querySelector('#back-to-top');
const button = BackToTop.applyToElement(element, {
    animationInDuration: 1000
});

// Destroy BackToTop when you're done
button.destroy();
```

For a full example, see [floating-button.html](examples/floating-button.html).

## Docs
### `applyToElement(element, [options])` {#docs-applytoelement}
Enables BackToTop events on an element.

- `element` The element to apply BackToTop to.
- `options` *optional*
    - `yThreshold` *optional* Minimum scroll position in pixels before element appears.
    - `animationInDuration` *optional* Duration of fade-in animation in milliseconds.
    - `animationOutDuration` *optional* Duration of fade-out animation in milliseconds.
    - `scrollBehavior` *optional* [Scrolling method to use](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo#behavior). Possible values: `auto`, `instant`, `smooth`.
    - `animationIn` *optional* Fade-in animation name.
    - `animationOut` *optional* Fade-out animation name.

## Note
When `applyToElement()` is first called, BackToTop injects it's own stylesheet inside `<head>` with
ID `backtotop-style`. This is to provide the default fade-in and fade-out animations.

## License
See [LICENSE](LICENSE)
