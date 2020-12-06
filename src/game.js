import Car from "./Car.js";

export default function RacingCarGame() {
  this.carList = [];
  this.resultString = "";

  this.createCarObj = (carNameList) => {
    carNameList.forEach((name) => {
      this.carList.push(new Car(name, ""));
    });
    console.log(this.carList);
  };

  this.setWinner = () => {};

  this.play = (turns) => {};
}
