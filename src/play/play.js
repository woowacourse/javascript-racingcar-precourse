import {
  $racingResultTitle,
  $winner,
  $winnerTitle,
  $racingCount,
  $status,
} from "../common/constants.js";
import Car from "../model/car.js";
import { trimCarName, splitCarName } from "../input/validateCarName.js";

const resultVisible = () => {
  $racingResultTitle.style.visibility = "visible";
  $winner.style.visibility = "visible";
  $winnerTitle.style.visibility = "visible";
};

const makeCar = (carArr) => carArr.map((el) => new Car(el));

const carMoveAndPrint = (carObject) => {
  for (let i = 0; i < $racingCount.value; i += 1) {
    carObject.forEach((el) => {
      el.judgeGoOrNot();
      el.printPosition();
    });
    $status.innerHTML += `<br>`;
  }
};

const sortCarObject = (carObject) => {
  return carObject.sort((a, b) => {
    if (a.position > b.position) {
      return -1;
    }
    return 1;
  });
};

const showResult = (carObject) => {
  const sortedCars = sortCarObject(carObject);
  $winner.innerHTML = "";

  sortedCars.forEach((el, idx) => {
    if (idx === 0) {
      $winner.innerHTML += `${el.name}`;
    }
    if (el.position === carObject[0].position && idx !== 0) {
      $winner.innerHTML += `, ${el.name}`;
    }
  });
};

export default function play() {
  resultVisible();
  $status.innerHTML = "";

  const carArr = trimCarName(splitCarName());
  const carObject = makeCar(carArr);
  carMoveAndPrint(carObject);
  showResult(carObject);

  return true;
}
