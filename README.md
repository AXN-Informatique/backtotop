# BackToTop
BackToTop is a package with no dependencies to make simple "back to top" buttons.

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
    // more options in `src/BackToTop.js`
    animationInDuration: 1000
});

// Destroy BackToTop when you're done
button.destroy();
```

For a full example, see [floating-button.html](examples/floating-button.html).

## License
See [LICENSE](LICENSE)
