export function displayElements(show, ...elements) {
    const display = show ? 'block' : 'none';
    elements.forEach((elem) => {
        elem.style.display = display;
    });
}
