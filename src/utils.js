import Car from './Car.js';

export const validateNameInput = names => {
  const namesArr = names.split(',');
  const areNamesValid = namesArr.every(name => name.length <= 5);
  if (!areNamesValid) {
    alert('자동차 이름을 5자리 이하로 입력해 주세요.');
    return false;
  } else {
    return true;
  }
};

export const makeCars = names => {
  const carNamesArr = names.value.split(',');
  const cars = [];
  for (let carName of carNamesArr) {
    cars.push(new Car(carName));
  }
  return cars;
};
