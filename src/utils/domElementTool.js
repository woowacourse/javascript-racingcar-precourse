export const $ = selector => document.querySelector(selector);

export const disabledElement = (element) => {
  element.disabled = true;
}