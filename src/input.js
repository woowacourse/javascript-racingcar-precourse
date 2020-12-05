import { startGame } from './utils.js';

let carObjectArray = [];
let times = 0;

function Car(name) {
  this.name = name;
  this.forwardCount = 0;
}

const validateCarsName = (array) => {
  let flag = true;

  array.forEach((name) => {
    if (name === ' ' || name.length > 5) {
      flag = false;
    }
  });

  return flag ? true : false;
};

const isDuplicateName = (array) => {
  let flag = true;

  array.forEach((name) => {
    let duplicatedName = array.filter((e) => e === name).length;

    if (duplicatedName > 1) {
      flag = false;
    }
  });

  return flag ? true : false;
};

export const getCarsName = () => {
  const carNameInput = document.getElementById('car-names-input').value;
  const carsArray = carNameInput.split(',');

  console.log(carsArray);

  if (!validateCarsName(carsArray)) {
    alert('예시를 다시 확인하고 입력해주세요!');
  } else if (!isDuplicateName(carsArray)) {
    alert('자동차의 이름이 중복되지 않게 입력해주세요!');
  } else if (carsArray.length < 2) {
    alert('차를 두 대 이상 입력해주세요!');
  } else {
    carsToObject(carsArray);
  }
};

const carsToObject = (carsArray) => {
  carsArray.forEach((car) => {
    carObjectArray.push(new Car(car));
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
