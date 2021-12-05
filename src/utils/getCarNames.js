import getUniqueId from "./getUniqueId.js";

function Car(name) {
  this.name = name;
  this.id = getUniqueId();
  this.moveCount = 0;
  this.moveCounts = [];
}

const getCarNames = (carNames) => carNames.map((name) => new Car(name));

export default getCarNames;
