export const generateRandomInteger = (min, max) => {
  if (min > max) {
    let temp = min;
    min = max;
    max = temp;
  }
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const isNumber = (n) => {
  if (
    n.charCodeAt(0) < '1'.charCodeAt(0) ||
    n.charCodeAt(0) > '9'.charCodeAt(0)
  )
    return true;
  return false;
};

export const displayElement = (selector, value) => {
  document.querySelector(selector).style.display = value;
};

export const hideElement = (selector) => {
  document.querySelector(selector).style.display = 'none';
};

export const requestInputAgain = (element) => {
  initNode(element);
  element.focus();
};

export const appendAtEnd = (selector, type, text) => {
  const parentNode = document.querySelector(selector);
  let newNode = document.createElement(type);

  newNode.innerHTML = text;
  parentNode.append(newNode);
};

export const appendLineBreakAtEnd = (selector) => {
  appendAtEnd(selector, 'br', '');
};

export const createBtn = (id, textContent) => {
  let button = document.createElement('button');
  button.id = id;
  button.textContent = textContent;

  return button;
};

export const initNode = (elem) => {
  if (elem.tagName === 'DIV') {
    return (elem.innerHTML = '');
  }
  if (elem.tagName === 'INPUT') {
    return (elem.value = '');
  }
};
