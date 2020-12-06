import playGame from '../game/prepareGame.js';

function Car(name) {
  this.name = name;
}

function makeNewCars(carNamesArray) {
  const carList = carNamesArray.map((name) => new Car(name));
  carList.forEach((car) => (car.count = 0));
  return playGame(carList);
}

function checkLength(carName) {
  if (carName.length === 0) {
    return false;
  }
  if (carName.length > 5) {
    return false;
  }
  return true;
}

function checkValidCarName(carNamesArray) {
  if (!carNamesArray.every(checkLength)) {
    return false;
  }
  return true;
}

export default function getCarNames() {
  const $carNamesInput = document.querySelector('#car-names-input');
  const carNamesArray = [...new Set($carNamesInput.value.split(','))];

  if (!checkValidCarName(carNamesArray)) {
    $carNamesInput.value = '';
    return alert('잘못 된 입력입니다! 다시 입력해주세요!');
  }
  return makeNewCars(carNamesArray);
}
