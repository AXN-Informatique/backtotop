const STYLE_ID = 'backtotop-style';

/**
 * Check if the BackToTop style is applied.
 * @return {Boolean} Whether or not the BackToTop style is applied.
 */
export function isApplied() {
    return document.querySelector(`#${STYLE_ID}`) !== null;
}

/**
 * Apply the BackToTop style.
 * @return {undefined}
 */
export function apply() {
    const style = document.createElement('style');
    style.textContent = `
        .backtotop-fadeIn,
        .backtotop-fadeOut {
            transition: opacity 0s;
        }

        .backtotop-fadeIn {
            opacity: 1;
        }

        .backtotop-fadeOut {
            opacity: 0;
            pointer-events: none;
        }
    `;

    style.id = STYLE_ID;
    document.head.appendChild(style);
}

/**
 * Remove the BackToTop style.
 * @return {undefined}
 */
export function remove() {
    document.querySelector(`#${STYLE_ID}`)?.remove();
}
