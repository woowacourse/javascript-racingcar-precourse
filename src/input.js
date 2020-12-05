import { startGame } from './utils.js';

let carObjectArray = [];
let times = 0;

function Car(name) {
  this.name = name;
  this.forwardCount = 0;
}

const validateCarsName = (array) => {
  let flag = true;
  array.forEach((e) => {
    if (e.length > 5) {
      flag = false;
    }
  });
  if (flag) {
    return true;
  } else {
    return false;
  }
};

export const getCarsName = () => {
  const carNameInput = document.getElementById('car-names-input').value;

  let carsArray = carNameInput.split(',');
  if (carsArray.length > 1 && validateCarsName(carsArray)) {
    carsToObject(carsArray);
  } else {
    alert('예시를 다시 확인하고 입력해주세요!');
  }
};

const carsToObject = (carsName) => {
  carsName.forEach((carName) => {
    carObjectArray.push(new Car(carName));
  });

  // test
  carObjectArray.forEach((e) => {
    console.log(e.name, e.forwardCount);
  });
};

export const getTimes = () => {
  times = document.getElementById('racing-count-input').value;
  if (times < 1) {
    alert('값을 1 이상 입력해주세요!');
  }
  console.log(times);

  startGame(times, carObjectArray);
};
