import RacingCar from "./RacingCar.js";
import { isValidCarInputs, isValidCountInput } from "./validation.js";

const $car_names_input = document.getElementById("car-names-input");
const $car_names_submit = document.getElementById("car-names-submit");
const $racing_count_input = document.getElementById("racing-count-input");
const $racing_count_submit = document.getElementById("racing-count-submit");

const RacingGame = new RacingCar();

const onClickSubmitCarNames = e => {
  e.preventDefault();

  const carInputs = $car_names_input.value;
  if (isValidCarInputs(carInputs)) {
    RacingGame.makeCarArray(carInputs);
  }
};

const onClickSubmitRacingCount = e => {
  e.preventDefault();
  RacingGame.resetGame();

  const racingCountInput = $racing_count_input.value;
  if (isValidCountInput(RacingGame.cars, racingCountInput)) {
    const racingCount = parseInt(racingCountInput);
    RacingGame.playGame(racingCount);
  }
};

$car_names_submit.addEventListener("click", onClickSubmitCarNames);
$racing_count_submit.addEventListener("click", onClickSubmitRacingCount);
