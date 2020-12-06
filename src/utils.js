import Car from './Car.js';

export const validateNameInput = names => {
  const namesArr = names.split(',');
  const areNamesUnderFive = namesArr.every(name => name.length <= 5);
  const areNamesUnique = namesArr.every((name, i) => namesArr.indexOf(name) === i);

  if (!areNamesUnderFive) {
    alert('자동차 이름을 5자리 이하로 입력해 주세요.');
    document.getElementById('car-names-input').focus();
    return false;
  } else if (!areNamesUnique) {
    alert('자동차 이름을 중복 없이 입력해 주세요.');
    document.getElementById('car-names-input').focus();
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

const moveCar = cars => {
  for (let car of cars) {
    let randNum = Math.random() * 10;
    if (randNum >= 4) {
      car.move();
    }
  }
  printProcess(cars);
};

const getWinners = cars => {
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

  printWinners(winners);
};

const printProcess = cars => {
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

const printWinners = winners => {
  const resultArea = document.getElementById('result');
  const winnerNode = document.createElement('p');
  winnerNode.appendChild(document.createTextNode('최종 우승자: '));

  for (let winner of winners) {
    const winnerText = document.createTextNode(`${winner.getName()}, `);
    winnerNode.appendChild(winnerText);
  }

  winnerNode.innerHTML = winnerNode.innerHTML.replace(/,(?=[^,]*$)/, '');
  resultArea.appendChild(winnerNode);
};

export const removeResult = () => {
  const resultArea = document.getElementById('result');
  const results = resultArea.getElementsByTagName('p');
  let i = results.length;
  while (i--) {
    resultArea.removeChild(results[i]);
  }
};
