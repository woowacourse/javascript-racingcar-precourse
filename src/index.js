import Car from "./car.js";
import { isValidCarInputs, isValidCountInput } from "./validation.js";

const $app = document.getElementById("app");
const $car_names_input = document.getElementById("car-names-input");
const $car_names_submit = document.getElementById("car-names-submit");
const $racing_count_input = document.getElementById("racing-count-input");
const $racing_count_submit = document.getElementById("racing-count-submit");
let $result;
let $winnerDiv;
let cars;

const init = () => {
  const resultDiv = document.createElement("div");
  const winnerDiv = document.createElement("div");
  resultDiv.id = "result";
  winnerDiv.id = "winners";

  $app.appendChild(resultDiv);
  $app.appendChild(winnerDiv);

  $result = document.getElementById("result");
  $winnerDiv = document.getElementById("winners");
};

const resetGame = () => {
  $result.innerHTML = "";
  $winnerDiv.innerHTML = "";

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

  const winnerString = getWinnerString(winner);
  $winnerDiv.innerHTML = `최종 우승자: ${winnerString}`;
};

const getWinnerString = winner => {
  return `<span id="racing-winners">${winner.join(", ")}</span>`;
};

const playGame = racingCount => {
  let i = 0;
  for (; i < racingCount; i++) {
    playCarsOneRound();
  }
  showWinner();
};

const onClickSubmitCarNames = e => {
  e.preventDefault();

  const carInputs = $car_names_input.value;
  if (isValidCarInputs(carInputs)) {
    cars = makeCarArray(carInputs);
  }
};

const onClickSubmitRacingCount = e => {
  e.preventDefault();
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
