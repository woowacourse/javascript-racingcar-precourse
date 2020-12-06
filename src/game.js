import Car from "./Car.js";

export default function RacingCarGame() {
  this.carList = [];
  this.resultString = "";

  this.createCarObj = (carNameList) => {
    carNameList.forEach((name) => {
      this.carList.push(new Car(name, ""));
    });
  };

  this.setWinner = () => {};

  this.play = (turns) => {
    console.log(turns);
  };
}
