export function createNewElement(tag, id = null) {
  const el = document.createElement(tag);
  
  if (id) {
    el.id = id;
  }

  return el;
}

export function setDisabled(el) {
  el.setAttribute('disabled', 'disabled');
  
  return el;
}
