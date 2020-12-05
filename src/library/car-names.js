import { makeElementBlock } from "./make-element-block.js";
import { Car } from "./car.js";

export function isCorrectCarNames(carName) {
  if (carName.length > 0 && carName.length <= 5) {
    return true;
  }

  return false;
}

export function addCorrectCarNames(carNames, inputCarNames) {
  const correctCarNames = carNames.map(function (carName) {
    carName = carName.trim();
    if (!isCorrectCarNames(carName)) {
      alert("모든 자동차의 이름을 5자 이하로 입력해주세요.");
      inputCarNames.value = "";

      return;
    }

    return carName;
  });

  return correctCarNames;
}

export function onBtnCarNamesClicked(cars, inputCarNames) {
  const carNames = inputCarNames.value.split(",");
  const correctCarNames = addCorrectCarNames(carNames, inputCarNames);
  const racingBox = document.getElementById("racing-count-box");

  if (!correctCarNames.includes(undefined)) {
    makeElementBlock(racingBox);
    correctCarNames.forEach((correctCar) => {
      cars.push(new Car(correctCar));
    });
  }

  return;
}
