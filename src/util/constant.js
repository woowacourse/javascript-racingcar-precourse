export const DOMS = Object.freeze({
  $racingCountInput: document.querySelector("#racing-count-input"),
  $carNamesInput: document.querySelector("#car-names-input"),
  $racingCountForm: document
    .querySelector("#racing-count-input")
    .closest("form"),
  $carNamesForm: document.querySelector("#car-names-input").closest("form"),
  $racingCountButton: document.querySelector("#racing-count-submit"),
  $app: document.querySelector("#app"),
  $racingWinners: document.querySelector("#racing-winners"),
});
