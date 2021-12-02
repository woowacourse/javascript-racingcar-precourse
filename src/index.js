import Car from "./Car.js";
import { isValidCarInputs, isValidCountInput } from "./validation.js";

const $car_names_input = document.getElementById("car-names-input");
const $car_names_submit = document.getElementById("car-names-submit");
const $racing_count_input = document.getElementById("racing-count-input");
const $racing_count_submit = document.getElementById("racing-count-submit");
let $result;
let $racing_winners;
let cars;

const init = () => {
  const $app = document.getElementById("app");
  const resultDiv = document.createElement("div");
  const winnerSpan = document.createElement("span");
  resultDiv.id = "result";
  winnerSpan.id = "racing-winners";

  $app.appendChild(resultDiv);
  $app.appendChild(winnerSpan);

  $result = document.getElementById("result");
  $racing_winners = document.getElementById("racing-winners");
};

const resetGame = () => {
  $result.innerHTML = "";
  $racing_winners.innerHTML = "";

  cars.forEach(car => (car.moveDistance = 0));
};

const makeCarArray = carInputs => {
  let carArray = carInputs.split(",").map(carInput => new Car(carInput));

  return carArray;
};

const playCarsOneRound = () => {
  cars.forEach(car => {
    car.playOneRound();
    $result.innerHTML += car.getState();
  });
  $result.innerHTML += "<br/>";
};

const showWinner = () => {
  let maxDistance = 0;
  cars.forEach(car => (maxDistance = Math.max(maxDistance, car.moveDistance)));

  const winner = cars
    .filter(car => car.moveDistance === maxDistance)
    .map(car => car.name);

  $racing_winners.innerHTML += `최종 우승자: ${winner.join(", ")}`;
};

const playGame = racingCount => {
  let i = 0;
  for (; i < racingCount; i++) {
    playCarsOneRound();
  }
  showWinner();
};

const onClickSubmitCarNames = () => {
  event.preventDefault();

  const carInputs = $car_names_input.value;
  if (isValidCarInputs(carInputs)) {
    cars = makeCarArray(carInputs);
  }
};

const onClickSubmitRacingCount = () => {
  event.preventDefault();
  resetGame();

  const racingCountInput = $racing_count_input.value;
  if (isValidCountInput(racingCountInput)) {
    const racingCount = parseInt(racingCountInput);
    playGame(racingCount);
  }
};

$car_names_submit.addEventListener("click", onClickSubmitCarNames);
$racing_count_submit.addEventListener("click", onClickSubmitRacingCount);

init();
