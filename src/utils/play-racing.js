import Car from '../car/index.js';
import { $, createElementWithContents } from './common.js';

const makeCarObjectArray = carNamesArray => {
  return carNamesArray.map(x => new Car(x));
};

const moveCars = carObjectArray => {
  carObjectArray.forEach(x => x.moveCar());
};

const showCarStatus = carObjectArray => {
  const resultDiv = $('result');
  carObjectArray.forEach(x => {
    const carStatus = createElementWithContents('div', x.getCarStatus());
    resultDiv.appendChild(carStatus);
  });
  resultDiv.appendChild(createElementWithContents('br'));
};

export default function playRacing(input) {
  const carObjectArray = makeCarObjectArray(input.carNamesArray);
  let i;
  for (i = 0; i < input.racingCount; i += 1) {
    moveCars(carObjectArray);
    showCarStatus(carObjectArray);
  }

  return carObjectArray;
}
