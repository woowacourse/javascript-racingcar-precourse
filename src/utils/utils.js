export const createElementWithId = (tagName, id, parent) => {
  const element = document.createElement(tagName);
  element.setAttribute('id', id);
  parent.appendChild(element);

  return element;
};

export const initInput = (input) => {
  input.value = '';
  input.focus();
};
