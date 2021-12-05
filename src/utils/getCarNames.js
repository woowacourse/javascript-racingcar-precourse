import newId from "./newId.js";

function Car(name) {
  this.name = name;
  this.id = newId();
  this.moveCount = 0;
  this.moveCounts = [];
}

const getCarNames = (carNames) => carNames.map((name) => new Car(name));

export default getCarNames;
