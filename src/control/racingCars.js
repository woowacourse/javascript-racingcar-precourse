import { $ } from "../common/const.js";
import Car from "../model/Cars.js";
import { showResult, appendBr, showWinners } from "../view/showResult.js";

export default function racingCars(carNames, runTime) {
  const carList = carNames.map((name) => new Car(name));
  const $resultDiv = $("result-div");
  let time = runTime;

  while (time--) {
    carList.map((car) => {
      car.go();
      showResult(car, $resultDiv);
    });
    appendBr($resultDiv);
  }
  showWinners(carList, $resultDiv);
}
