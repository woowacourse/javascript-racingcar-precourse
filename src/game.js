import Car from './car.js';

export function getCarObjList(...cars) {
  const carObjList = [];
  cars.forEach((car) => {
    const carObj = new Car(car);
    carObjList.push(carObj);
  });

  return carObjList;
}

export function makeRandomNum() {
  const num = MissionUtils.Random.pickNumberInRange(0, 9);
  return num;
}
