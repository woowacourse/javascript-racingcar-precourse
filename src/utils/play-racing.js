import Car from '../car/index.js';
import { $, createElementWithContents } from './common.js';

const makeCarObjectList = carNamesList => {
  return carNamesList.map(x => new Car(x));
};

const moveCars = carObjectList => {
  carObjectList.forEach(x => x.moveCar());
};

const showCarStatus = carObjectList => {
  const resultDiv = $('result');
  carObjectList.forEach(x => {
    const carStatus = createElementWithContents('div', x.getCarStatus());
    resultDiv.appendChild(carStatus);
  });
  resultDiv.appendChild(createElementWithContents('br'));
};

export default function playRacing(input) {
  const carObjectList = makeCarObjectList(input.carNamesList);
  let i;
  for (i = 0; i < input.racingCount; i += 1) {
    moveCars(carObjectList);
    showCarStatus(carObjectList);
  }

  return carObjectList;
}
