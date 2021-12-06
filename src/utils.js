import { ERROR_MESSAGE } from './constants.js';

const { NO_SELECTOR } = ERROR_MESSAGE;

export function qs(selector, scope = document) {
  if (!selector) throw new Error(NO_SELECTOR);

  return scope.querySelector(selector);
}

export function qsAll(selector, scope = document) {
  if (!selector) throw new Error(NO_SELECTOR);

  return Array.from(scope.querySelectorAll(selector));
}

export function on(target, eventName, handler) {
  target.addEventListener(eventName, handler);
}

export function setStyleDisplay(element, value) {
  if (!element) throw new Error(NO_SELECTOR);
  const el = element;
  el.style.display = value;
}

export function checkOverFiveLetters(cars) {
  for (const name of cars) {
    if (name.length > 5) return false;
  }
  return true;
}

export function changeDistanceToBar(distance) {
  const bar = [];
  for (let i = 0; i < distance; i += 1) {
    bar.push('-');
  }
  return bar;
}

export function setValidation(condition, errorMessage) {
  if (condition) {
    alert(errorMessage);
    return true;
  }
  return false;
}
