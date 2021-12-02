export function qs(selector, scope = document) {
  if (!selector) throw 'no selector';

  return scope.querySelector(selector);
}

export function on(target, eventName, handler) {
  target.addEventListener(eventName, handler);
}
