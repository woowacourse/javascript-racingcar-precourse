import Car from "./Car.js";
import { getMaxPropByVal } from "./utils.js";
import { combineResult, setResult } from "./render.js";

export default function RacingCarGame() {
  this.carList = [];
  this.resultString = "";

  this.createCarObj = (carNameList) => {
    carNameList.forEach((name) => {
      this.carList.push(new Car(name, ""));
    });
  };

  this.setWinner = () => {
    const winner = getMaxPropByVal(this.carList, "name", "locationLength");
    const winnerString = `최종 우승자: ${winner.join(",")}`;

    combineResult(this, winnerString);
    setResult(this);
  };

  this.play = (turns) => {
    for (let i = 0; i < turns; i++) {
      this.carList.forEach((car) => {
        car.move();
        combineResult(this, car.toString());
      });
      this.resultString += "<br>";
    }
    this.setWinner();
  };
}
