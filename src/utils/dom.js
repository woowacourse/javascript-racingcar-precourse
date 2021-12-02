export const $ = (selector, target = document) =>
  target.querySelector(selector);

export const createElement = (id, innerHTML = '', type = 'div') => {
  const element = document.createElement(type);
  element.innerHTML = innerHTML;
  element.setAttribute('id', id);
  return element;
};

export const disableInput = input => {
  input.disabled = true;
};

export const enableInput = input => {
  input.disabled = false;
};

export const focusInput = input => input.focus();
