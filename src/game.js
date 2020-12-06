import Car from "./Car.js";
import { getMaxPropByVal } from "./utils.js";

export default function RacingCarGame() {
  this.carList = [];
  this.resultString = "";

  this.createCarObj = (carNameList) => {
    carNameList.forEach((name) => {
      this.carList.push(new Car(name, ""));
    });
  };

  this.setWinner = () => {
    console.log(this.carList);
    getMaxPropByVal(this.carList, "name", "locationLength");
  };

  this.play = (turns) => {
    for (let i = 0; i < turns; i++) {
      this.carList.forEach((car) => {
        car.move();
      });
    }
    this.setWinner();
  };
}
