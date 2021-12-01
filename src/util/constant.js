export const DOMS = Object.freeze({
  $racingCountInput: document.querySelector("#racing-count-input"),
  $carNamesInput: document.querySelector("#car-names-input"),
  $racingCountForm: document
    .querySelector("#racing-count-input")
    .closest("form"),
  $carNamesForm: document.querySelector("#car-names-input").closest("form"),
  $racingCountButton: document.querySelector("#racing-count-submit"),
  $app: document.querySelector("#app"),
});

export const CAR_MOVE_RANGE = Object.freeze({
  MIN: 0,
  MAX: 9,
  POINT: 4,
});

export const VALID_NUMBER = Object.freeze({
  CAR_NAME_LENGTH: 5,
  RACING_COUNT: 0,
});
