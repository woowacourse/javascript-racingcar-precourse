import { ELEMENT_MESSAGE } from "./constant.js";

export function setGameElemetStyle(elementStyleMessage) {
  const gameCountForm = $("racing-count-form");
  const gameCountTitle = $("racing-count-title");
  const gameResultTitle = $("racing-result");
  if (elementStyleMessage === ELEMENT_MESSAGE.BEFORE_GAME) {
    gameCountForm.style.opacity = 0;
    gameCountTitle.style.opacity = 0;
    gameResultTitle.style.opacity = 0;
  } else if (elementStyleMessage === ELEMENT_MESSAGE.CARS_INPUT) {
    gameCountForm.style.opacity = 1;
    gameCountTitle.style.opacity = 1;
  } else if (elementStyleMessage === ELEMENT_MESSAGE.COUNT_INPUT) {
    gameResultTitle.style.opacity = 1;
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