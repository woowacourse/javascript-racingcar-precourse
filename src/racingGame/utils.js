export const changeArrayRemoveSpace = carNames =>
  carNames.split(",").map(name => name.trim());

export const makeElement = ({ tag, innerText = "", id = "" }) => {
  const element = document.createElement(tag);
  if (innerText) {
    element.innerText = innerText;
  }
  if (id) {
    element.id = id;
  }
  return element;
};
