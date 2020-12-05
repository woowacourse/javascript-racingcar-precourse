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

export const startRace = (cars, count) => {
  for (let i = 0; i < count; i++) {
    moveCar(cars);
  }
  getWinners(cars);
};

export const moveCar = cars => {
  for (let car of cars) {
    let randNum = Math.random() * 10;
    if (randNum >= 4) {
      car.move();
    }
  }
  printProcess(cars);
};

export const getWinners = cars => {
  let winners = [];
  cars.sort((car1, car2) => {
    return car2.getCount() - car1.getCount();
  });
  winners.push(cars[0]);

  const maxCount = cars[0].getCount();
  for (let i = 1; i < cars.length; i++) {
    if (cars[i].getCount() === maxCount) {
      winners.push(cars[i]);
    } else {
      break;
    }
  }
};

export const printProcess = cars => {
  const resultArea = document.getElementById('result');
  const processArea = document.createElement('p');
  for (let car of cars) {
    const currCarString = document.createTextNode(
      `${car.getName()}: ${'-'.repeat(car.getCount())}`,
    );
    processArea.appendChild(currCarString);
    processArea.appendChild(document.createElement('br'));
  }
  resultArea.appendChild(processArea);
};
