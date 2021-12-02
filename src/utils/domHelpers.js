// querySelector wrapper
export function $(selector, scope) {
  return (scope || document).querySelector(selector);
}

export function showElement(selector) {
  $(selector).style.visibility = 'visible';
}
