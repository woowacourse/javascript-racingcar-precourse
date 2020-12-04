import { splitByComma } from "../input/index.js";

function Car(name, moveDistance) {
  this.name = name;
  this.moveDistance = moveDistance;
}

const initialState = (namesArray) => namesArray.map((name) => new Car(name, 0));

const generateRandomNumber = () => Math.floor(Math.random() * 10);

export const raceStart = () => {
  const nameInput = document.getElementById("car-names-input");
  const countInput = document.getElementById("racing-count-input");
  const namesArray = splitByComma(nameInput.value);
  const count = parseInt(countInput.value);

  const racer = initialState(namesArray);
};
