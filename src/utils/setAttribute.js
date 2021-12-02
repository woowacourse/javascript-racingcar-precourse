export function hideElement(element) {
  return element.setAttribute('hidden', true);
}

export function showElement(element) {
  return element.removeAttribute('hidden');
}
