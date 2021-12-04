export const $ = (selector, target = document) =>
  target.querySelector(selector);

export const createElement = (id, innerHTML = '', type = 'div') => {
  const element = document.createElement(type);
  element.innerHTML = innerHTML;
  element.setAttribute('id', id);
  return element;
};

export const disableForm = formElement => {
  $('input', formElement).disabled = true;
  $('button', formElement).disabled = true;
};

export const enableForm = formElement => {
  const inputElem = $('input', formElement);
  inputElem.disabled = false;
  inputElem.focus();
  $('button', formElement).disabled = false;
};
