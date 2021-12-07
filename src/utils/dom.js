export const $ = (selector) => document.querySelector(selector);
export const createElementWithID = (element = 'div', id) => {
  const el = document.createElement(element);
  el.id = id;
  return el;
};
