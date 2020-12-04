import { checkTryCount, makeCarNamesCheckResult } from './utils/validation.js';
import {
  preProcessCarNamesToCarNameList,
  preProcessTryCount,
} from './utils/preProcess.js';
import { makeAlertMessage } from './utils/alert.js';
import {
  INVALID_TRY_COUNT_NUMBER_MESSAGE,
  INVALID_CAR_NAMES_MESSAGE,
  CAR_NAMES_NOT_SUBMITTED_MESSAGE,
} from './constants/configuration.js';
import { makeRaceCourseProcessRecordsTemplate } from './templates/templates.js';

import Car from './classes/car.js';
import RacingCarGame from './classes/racingCarGame.js';

const carNamesInputElement = document.getElementById('car-names-input');
const carNamesSubmitButtonElement = document.getElementById('car-names-submit');
const racingCountInputElement = document.getElementById('racing-count-input');
const racingCountSubmitElement = document.getElementById('racing-count-submit');
const racingProcessRecordsElement = document.getElementById(
  'racing-process-records'
);
const racingWinnersElement = document.getElementById('racing-winners');

let carNameList = [];
let tryCount = 0;
let isCarNamesValid = false;
let isTryCountValid = false;
let isCarNamesSubmitted = false;

carNamesInputElement.addEventListener('input', () => {
  isCarNamesSubmitted = false;
});

carNamesSubmitButtonElement.addEventListener('click', () => {
  carNameList = preProcessCarNamesToCarNameList(carNamesInputElement.value);
  const carNameCheckResult = makeCarNamesCheckResult(carNameList);
  if (
    carNameCheckResult.isAllCarNameDifferent &&
    carNameCheckResult.isCarNameNotLong &&
    carNameCheckResult.isCarNumberEnough
  ) {
    isCarNamesSubmitted = true;
    isCarNamesValid = true;
  } else {
    const alertMessage = makeAlertMessage(carNameCheckResult);
    alert(alertMessage);
  }
});

racingCountSubmitElement.addEventListener('click', () => {
  tryCount = preProcessTryCount(racingCountInputElement.value);
  isTryCountValid = checkTryCount(tryCount);
  if (isCarNamesSubmitted === false) {
    alert(CAR_NAMES_NOT_SUBMITTED_MESSAGE);
    return;
  }
  if (isTryCountValid === false) {
    alert(INVALID_TRY_COUNT_NUMBER_MESSAGE);
    return;
  }
  if (isCarNamesValid) {
    const racingCarGame = new RacingCarGame();
    carNameList.forEach((carName) => {
      const car = new Car(carName);
      racingCarGame.addCarToRaceCourse(car);
    });
    racingCarGame.play(tryCount);
    racingProcessRecordsElement.innerHTML = makeRaceCourseProcessRecordsTemplate(
      racingCarGame.raceCourseProcessRecords
    );
    const winnerList = racingCarGame.getWinnerCarNameList();
    racingWinnersElement.innerText = `최종 우승자: ${winnerList.join(', ')}`;
  } else {
    alert(INVALID_CAR_NAMES_MESSAGE);
  }
});
