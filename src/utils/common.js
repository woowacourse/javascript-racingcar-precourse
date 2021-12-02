export const $ = id => document.getElementById(id);

export const createElementWithContents = (tag, contents = '') => {
  const htmlTag = document.createElement(tag);
  htmlTag.innerHTML = contents;

  return htmlTag;
};
