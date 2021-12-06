import Car from './car.js';

export function appendResult(carObjList) {
  const div = document.createElement('div');
  document.body.appendChild(div);

  carObjList.forEach((car) => {
    const item = `${car.name}: ${'-'.repeat(car.step)} <br/>`;
    div.innerHTML += item;
  });
  div.innerHTML += '<br/>';
}

export function plusStep(cars, raceCount) {
  const carObjList = setCarObjList(cars);
  for (let i = 0; i < raceCount; i++) {
    getStep(carObjList);
    appendResult(carObjList);
  }
}

export function getStep(carObjList) {
  for (let i = 0; i < carObjList.length; i++) {
    if (isStepValid()) {
      carObjList[i].step += 1;
    }
  }
  return carObjList;
}

export function isStepValid() {
  const step = makeRandomNum();
  let validStep = 0;
  if (step >= 4) {
    validStep = 1;
  }
  return validStep;
}

export function setCarObjList(cars) {
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
