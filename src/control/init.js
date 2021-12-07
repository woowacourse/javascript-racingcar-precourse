import { SELECTOR_NUMBERS } from "../common/const.js";
import startGame from "./startGame.js";

function addEventHandler(seletor) {
  seletor.addEventListener("click", (event) => {
    event.preventDefault();
    startGame();
  });
}

export default function init() {
  const domInputArray = document.querySelectorAll("input");
  const domButtonArray = document.querySelectorAll("button");

  const $carNamesInput = domInputArray[SELECTOR_NUMBERS.CAR_NUMBER];
  const $carNamesSubmit = domButtonArray[SELECTOR_NUMBERS.CAR_NUMBER];
  const $racingCountInput = domInputArray[SELECTOR_NUMBERS.RACING_NUMBER];
  const $racingCountSubmit = domButtonArray[SELECTOR_NUMBERS.RACING_NUMBER];

  $carNamesInput.id = "car-names-input";
  $carNamesSubmit.id = "car-names-submit";
  $racingCountInput.id = "racing-count-input";
  $racingCountSubmit.id = "racing-count-submit";

  addEventHandler($carNamesSubmit);
  addEventHandler($racingCountSubmit);
}
