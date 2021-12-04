export const $ = (selector) => document.querySelector(selector);
export const $$ = (selector) => document.querySelectorAll(selector);

const setElements = (target) => {
  const isArray = Array.isArray(target);

  if (isArray === true) return target;
  if (isArray === false) return [target];
};

export const elementDisable = (target, isDisabled) => {
  const elements = setElements(target);

  elements.forEach((element) => {
    if (isDisabled === true) element.setAttribute('disabled', '');
    else if (isDisabled === false) element.removeAttribute('disabled');
  });
};

export const elementVisible = (target, isVisible) => {
  const elements = setElements(target);

  elements.forEach((element) => {
    element.style.display = isVisible ? 'block' : 'none';
  });
};

export const createElement = (tagName, tagText = '') => {
  const $create = document.createElement(tagName);
  $create.innerText = tagText;

  return $create;
};

export const combineElement = (elements) => {
  const $fragment = document.createDocumentFragment();
  elements.forEach((element) => $fragment.append(element));

  return $fragment;
};
