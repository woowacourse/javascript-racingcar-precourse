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
    for (let i = 0; i < turns; i++) {
      this.carList.forEach((car) => {
        car.move();
      });
    }
    console.log(this.carList);
  };
}
