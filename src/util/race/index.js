import { splitByComma } from "../input/index.js";

function Car(name, moveDistance) {
  this.name = name;
  this.moveDistance = moveDistance;
}

const initialState = (namesArray) => namesArray.map((name) => new Car(name, 0));

const generateRandomNumber = () => Math.floor(Math.random() * 10);

const moveOrStop = (number) => (number >= 4 ? true : false);

const calculateEachRace = (cars) => {
  const eachResult = cars.map((car) => {
    const randomNum = generateRandomNumber();
    const canMove = moveOrStop(randomNum);

    if (canMove) {
      car.moveDistance += 1;
    }

    return car.moveDistance;
  });

  return eachResult;
};

export const raceStart = () => {
  const nameInput = document.getElementById("car-names-input");
  const countInput = document.getElementById("racing-count-input");
  const namesArray = splitByComma(nameInput.value);
  const count = parseInt(countInput.value);

  const cars = initialState(namesArray);
  let eachRaceResult = [];

  for (let i = 0; i < count; i++) {
    eachRaceResult[i] = calculateEachRace(cars);
  }
};
