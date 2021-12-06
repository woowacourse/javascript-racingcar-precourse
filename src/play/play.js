import {
  $racingResultTitle,
  $winner,
  $racingCount,
  $status,
} from "../common/constants.js";
import Car from "../model/car.js";
import { trimCarName, splitCarName } from "../input/validateCarName.js";

const resultVisible = () => {
  $racingResultTitle.style.visibility = "visible";
  $winner.style.visibility = "visible";
};
const makeCar = (carArr) => carArr.map((el) => new Car(el));

export default function play() {
  resultVisible();
  const carArr = trimCarName(splitCarName());
  const carObject = makeCar(carArr);
  for (let i = 0; i < $racingCount.value; i += 1) {
    carObject.forEach((el) => {
      el.judgeGoOrNot();
      el.printPosition();
    });
    $status.innerHTML += `<br>  `;
  }

  return true;
}
