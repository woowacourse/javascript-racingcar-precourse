import RacingCar from "./RacingCar.js";
import { isValidCarInputs, isValidCountInput } from "./validation.js";

const $car_names_input = document.getElementById("car-names-input");
const $car_names_submit = document.getElementById("car-names-submit");
const $racing_count_input = document.getElementById("racing-count-input");
const $racing_count_submit = document.getElementById("racing-count-submit");

const racingCar = new RacingCar();

const onClickSubmitCarNames = event => {
  event.preventDefault();

  const carInputs = $car_names_input.value;
  if (isValidCarInputs(carInputs)) {
    racingCar.makeCarArray(carInputs);
  }
};

const onClickSubmitRacingCount = event => {
  event.preventDefault();

  racingCar.resetGame();

  const racingCountInput = $racing_count_input.value;
  if (isValidCountInput(racingCar.cars, racingCountInput)) {
    racingCar.playGame(parseInt(racingCountInput));
  }
};

$car_names_submit.addEventListener("click", onClickSubmitCarNames);
$racing_count_submit.addEventListener("click", onClickSubmitRacingCount);
