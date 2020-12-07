export const showErrorMessages = (errorMessages) => {
  alert(errorMessages);
};

export const setDisable = (object, value) => {
  object.disabled = value;
};

export const setVisibility = (object, value) => {
  console.log(object);
  object.style.visibility = value;
};

export const makeDomPTag = (text) => {
  return document.createTextNode(text);
};
