import Car from './Car.js';

export const $ = (selector) => document.querySelector(selector);

export const alertError = (message, $element) => {
  $element.value = '';
  alert(message);
  $element.focus();
};

export const hideRacingCountForm = () => {
  $('#racing-count-form-title').style.display = 'none';
  $('#racing-count-form').style.display = 'none';
};

export const revealRacingCountForm = () => {
  $('#racing-count-form-title').style.display = 'block';
  $('#racing-count-form').style.display = 'block';
  $('#racing-count-input').focus();
};

export const validateNames = (names) => {
  if (names.length === 1) {
    return false;
  }
  for (let i = 0; i < names.length; i++) {
    if (names[i].length === 0 || names[i].length > 5) {
      return false;
    }
  }
  if (names.length !== new Set(names).size) {
    return false;
  }
  return true;
};

export const validateCount = (parsedInput) => {
  if (parsedInput <= 0) {
    return false;
  }
  if (isNaN(parsedInput)) {
    return false;
  }
  return true;
};

export const createCars = (names) => {
  const cars = names.map((name) => new Car(name));
  return cars;
};

export const createRacingResultArea = () => {
  const AREA_ID = 'racing-result';

  const $racingResultArea = document.createElement('p');
  $racingResultArea.id = AREA_ID;

  $('#app').appendChild($racingResultArea);
};

export const proceedRacingStage = (cars) => {
  cars.map((car) => {
    const randomNum = car.generateRandomNumber();
    if (randomNum >= 4) {
      car.moveForward();
    }
    paintCurrentCar(car);
  });
  $('#racing-result').appendChild(document.createElement('br'));
};

export const paintCurrentCar = (car) => {
  const CURRENT_DISTANCE = '-'.repeat(car.forwardCount);
  const currentCarStatus = document.createTextNode(
    `${car.name}: ${CURRENT_DISTANCE}`
  );

  $('#racing-result').appendChild(currentCarStatus);
  $('#racing-result').appendChild(document.createElement('br'));
};

export const getWinners = (cars) => {
  const MAX_FORWARD = Math.max(...cars.map(({ forwardCount }) => forwardCount));
  const winners = cars.filter(
    ({ forwardCount }) => forwardCount === MAX_FORWARD
  );
  return winners;
};

export const paintWinners = (winners) => {
  const WINNERS_NAMES = winners.map(({ name }) => name);

  const $resultLine = document.createElement('span');
  $resultLine.innerHTML = '최종 우승자: ';

  const $racingWinners = document.createElement('span');
  $racingWinners.id = 'racing-winners';
  $racingWinners.innerHTML = WINNERS_NAMES.join();

  $resultLine.appendChild($racingWinners);
  $('#racing-result').appendChild($resultLine);
};
