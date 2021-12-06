import Car from './car.js';

export function getStep(...cars) {
  const carObjList = getCarObjList(...cars);
  carObjList.forEach((car) => {
    if (isStepValid()) {
      car.step += 1;
    }
  });
}

export function isStepValid() {
  const step = makeRandomNum();
  let validStep = 0;
  if (step >= 4) {
    validStep = 1;
  }
  return validStep;
}

export function getCarObjList(cars) {
  let carObjList = [];
  for (let i = 0; i < cars.length; i++) {
    const carObj = new Car(cars[i]);
    carObjList.push(carObj);
  }
  return carObjList;
}

export function makeRandomNum() {
  const num = MissionUtils.Random.pickNumberInRange(0, 9);
  return num;
}
