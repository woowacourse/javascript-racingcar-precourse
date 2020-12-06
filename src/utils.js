export function createNewElement(tag, id) {
  const el = document.createElement(tag);
  el.id = id;

  return el;
}

export function setDisabled(el) {
  el.setAttribute('disabled', 'disabled');
  
  return el;
}
