import * as Style from './Style.js';

class BackToTop {
    #element;
    #options;

    #controller = new AbortController();

    constructor(
        element,
        {
            yThreshold           = 100,
            animationInDuration  = 600,
            animationOutDuration = 600,
            scrollBehavior       = 'smooth',
            animationIn          = 'backtotop-fadeIn',
            animationOut         = 'backtotop-fadeOut',
        }
    ) {
        this.#element = element;

        /** @type {Number} */
        this.yThreshold = yThreshold;

        /** @type {Number} */
        this.animationInDuration = animationInDuration;

        /** @type {Number} */
        this.animationOutDuration = animationOutDuration;

        /** @type {string} */
        this.scrollBehavior = scrollBehavior;

        /** @type {string} */
        this.animationIn = animationIn;

        /** @type {string} */
        this.animationOut = animationOut;

        element.addEventListener(
            'click',
            this.#onClick.bind(this),
            { signal: this.#controller.signal }
        );

        document.addEventListener(
            'scrollend',
            this.#onScroll.bind(this),
            { signal: this.#controller.signal }
        );

        this.#onScroll();
    }

    /**
     * Scroll back to top.
     * @private
     * @param  {Event} e
     * @return {undefined}
     */
    #onClick(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: this.scrollBehavior,
        });
    }

    /**
     * Update the classes and transitions.
     * @private
     * @param  {Event} e
     * @return {undefined}
     */
    #onScroll(e) {
        if (window.scrollY > this.yThreshold) {
            this.#element.style['transition-duration'] = `${this.animationInDuration}ms`;
            this.#element.style.removeProperty('visibility');
            this.#element.classList.add(this.animationIn);
            this.#element.classList.remove(this.animationOut);
        } else {
            this.#element.style['transition-duration'] = `${this.animationOutDuration}ms`;
            this.#element.classList.add(this.animationOut);
            this.#element.classList.remove(this.animationIn);
        }
    }

    /**
     * Destroy the BackToTop element, removing classes and events.
     * @return {undefined}
     */
    destroy() {
        this.#controller.abort();
        this.#element.classList.remove(
            this.animationIn,
            this.animationOut
        );
    }
}

/**
 * Apply BackToTop on an element.
 * @param  {HTMLElement} element Element to hook onto.
 * @param  {Number} [options.yThreshold=100] Minimum scroll position in pixels before element appears.
 * @param  {Number} [options.animationInDuration=600] Duration of fade-in animation.
 * @param  {Number} [options.animationOutDuration=600] Duration of fade-out animation.
 * @param  {String} [options.scrollBehavior=smooth] Scrolling method to use. Possible values: auto, instant, smooth.
 * @param  {String} [options.animationIn=backtotop-fadeIn] Fade-in animation name.
 * @param  {String} [options.animationOut=backtotop-fadeOut] Fade-out animation name.
 * @return {BackToTop}
 */
export function applyToElement(element, options = {}) {
    if (!(element instanceof HTMLElement)) {
        throw new Error('applyToElement: first argument must be an element');
    }

    if (!Style.isApplied()) {
        Style.apply();
    }

    return new BackToTop(element, options);
}
