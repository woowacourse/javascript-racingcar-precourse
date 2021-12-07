import {
  $racingCount,
  $racingResultTitle,
  $racingStatus,
  $winner,
  EMPTY,
} from "../common/constants.js";
import Car from "../model/car.js";
import { trimCarName, splitCarName } from "../input/validateCarName.js";

const resultVisible = () => {
  $racingResultTitle.style.visibility = "visible";
};

const makeCar = (carArr) => carArr.map((el) => new Car(el));

const carMoveAndPrint = (carObject) => {
  $racingStatus.innerHTML = EMPTY;

  for (let i = 0; i < $racingCount.value; i += 1) {
    carObject.forEach((el) => {
      el.judgeGoOrNot();
      el.printPosition();
    });
    $racingStatus.innerHTML += `<br>`;
  }
  $racingStatus.innerHTML += `최종 우승자: `;

  $racingResultTitle.after($racingStatus);
};

const sortCarObject = (carObject) => {
  return carObject.sort((a, b) => {
    if (a.position > b.position) {
      return -1;
    }

    return 1;
  });
};

const showResult = (sortedCars) => {
  $winner.id = "racing-winners";
  $winner.innerHTML = EMPTY;
  const maxPosition = sortedCars[0].position;

  const winnerList = sortedCars
    .filter((car) => car.position === maxPosition)
    .map((car) => car.name)
    .join(", ");

  $winner.innerText = winnerList;
  $racingStatus.after($winner);
};

export default function play() {
  resultVisible();
  const carArr = trimCarName(splitCarName());
  const carObject = makeCar(carArr);

  carMoveAndPrint(carObject);
  showResult(sortCarObject(carObject));

  return true;
}
