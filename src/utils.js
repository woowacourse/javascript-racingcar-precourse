export function qs(selector, scope = document) {
  if (!selector) throw 'no selector';

  return scope.querySelector(selector);
}

export function qsAll(selector, scope = document) {
  if (!selector) throw 'no selector';

  return Array.from(scope.querySelectorAll(selector));
}

export function on(target, eventName, handler) {
  target.addEventListener(eventName, handler);
}

export function setStyleDisplay(element, value) {
  element.style.display = value
}

export function checkOverFiveLetters(cars) {
  for (const name of cars) {
    if (name.length > 5) return false;
  }
  return true;
}