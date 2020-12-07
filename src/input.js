import { startGame, resetGame } from './utils.js';

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

  if (!validateCarsName(carsArray)) {
    alert('예시를 다시 확인하고 입력해주세요!');
    resetGame();
    return;
  }
  if (!isDuplicateName(carsArray) || carsArray.length < 2) {
    alert('자동차의 이름이 중복되지 않게 두 대 이상 입력해주세요!');
    resetGame();
    return;
  }
  carsToObject(carsArray);
};

const carsToObject = (carsArray) => {
  carsArray.forEach((car) => {
    carObjectArray.push(new Car(car));
  });
};

export const getTimes = () => {
  times = document.getElementById('racing-count-input').value;
  if (!carObjectArray.length) {
    alert('자동차를 먼저 입력해주세요!');
    resetGame();
    return;
  }
  if (times < 1) {
    alert('값을 1 이상 입력해주세요!');
    resetGame();
    return;
  }

  startGame(times, carObjectArray);
};
