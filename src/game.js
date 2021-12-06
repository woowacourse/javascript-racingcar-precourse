import Car from './car.js';

export function isStepValid() {
  const step = makeRandomNum();
  let validStep = 0;
  if (step >= 4) {
    validStep = 1;
  }
  return validStep;
}

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
