// querySelector wrapper
export function $(selector, scope) {
  return (scope || document).querySelector(selector);
}

export function hideElement(selector) {
  $(selector).style.visibility = 'hidden';
}

export function showElement(selector) {
  $(selector).style.visibility = 'visible';
}
