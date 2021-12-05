import Car from './car.js';

export default function makeCarList(carNameList) {
  let carList = [];
  carNameList.forEach(element => {
    carList.push(new Car(element));
  });
  return carList;
}