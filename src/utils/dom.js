import { ELEMENT_MESSAGE, NUMBER } from "./constant.js";

export function setGameElemetStyle(elementStyleMessage) {
  const gameCountForm = $("racing-count-form");
  const gameCountTitle = $("racing-count-title");
  const gameResultTitle = $("racing-result");
  if (elementStyleMessage === ELEMENT_MESSAGE.BEFORE_GAME) {
    gameCountForm.style.opacity = NUMBER.ZERO;
    gameCountTitle.style.opacity = NUMBER.ZERO;
    gameResultTitle.style.opacity = NUMBER.ZERO;
  } else if (elementStyleMessage === ELEMENT_MESSAGE.CARS_INPUT) {
    gameCountForm.style.opacity = NUMBER.ONE;
    gameCountTitle.style.opacity = NUMBER.ONE;
  } else if (elementStyleMessage === ELEMENT_MESSAGE.COUNT_INPUT) {
    gameResultTitle.style.opacity = NUMBER.ONE;
  }
}

export function $(selector) {
  return document.getElementById(selector);
}

export function $all(selector) {
  return document.querySelectorAll(selector);
}

export function $new(selector) {
  return document.createElement(selector);
}