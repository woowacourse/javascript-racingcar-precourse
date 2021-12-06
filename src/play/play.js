import {
  $racingResultTitle,
  $racingCount,
  $racingCountSubmit,
  $racingStatus,
  $winner,
} from "../common/constants.js";
import Car from "../model/car.js";
import { trimCarName, splitCarName } from "../input/validateCarName.js";

const resultVisible = () => {
  $racingResultTitle.style.visibility = "visible";
};

const makeCar = (carArr) => carArr.map((el) => new Car(el));

const carMoveAndPrint = (carObject) => {
  $racingStatus.innerHTML = `<br>`;
  for (let i = 0; i < $racingCount.value; i += 1) {
    carObject.forEach((el) => {
      el.judgeGoOrNot();
      $racingStatus.innerHTML += el.printPosition();
    });
    $racingStatus.innerHTML += `<br>`;
    // 엔터 추가
  }
  $racingCountSubmit.after($racingStatus);
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
  $winner.id = "racing-winners";
  $winner.innerHTML = "";
  sortedCars.forEach((el, idx) => {
    if (idx === 0) {
      $winner.innerHTML += `${el.name}`;
    }
    if (el.position === carObject[0].position && idx !== 0) {
      $winner.innerHTML += `, ${el.name}`;
    }
  });
  $racingResultTitle.after($winner);
};

export default function play() {
  resultVisible();
  const carArr = trimCarName(splitCarName());
  const carObject = makeCar(carArr);

  carMoveAndPrint(carObject);
  showResult(carObject);

  return true;
}
