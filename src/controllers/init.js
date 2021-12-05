import { carNamesInput, racingCountInput } from "./userInput.js";
import RacingCar from "../models/RacingCar.js";
import { play, getWinner } from "./racingGame.js";
import { showWinner } from "../views/view.js";

export function init(object) {
  carInputInit(object);
  racingCountInputInit(object);
}

export function makeCarObjects(object) {
  object.carsArray.map((item) => {
    object.cars = [...object.cars, new RacingCar(item)];
  });
}

export function carInputInit(object) {
  const $carNamesSubmit = document.getElementById("car-names-submit");
  $carNamesSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    object.cars = [];
    object.carsArray = carNamesInput();
    if (object.carsArray !== undefined) {
      makeCarObjects(object);
    }
  });
}

export function racingCountInputInit(object) {
  const $racingCountSubmit = document.getElementById("racing-count-submit");
  $racingCountSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    if (object.cars.length === 0) alert("자동차를 먼저 입력해주세요");
    else {
      for (let i = 0; i < racingCountInput(); i++) play(object);
      showWinner(getWinner(object));
    }
  });
}
