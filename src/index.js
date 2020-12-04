import { checkTryCount, makeCarNamesCheckResult } from './utils/validation.js';
import {
  preProcessCarNamesToCarNameList,
  preProcessTryCount,
} from './utils/preProcess.js';
import { makeAlertMessage } from './utils/alert.js';
import { INVALID_TRY_COUNT_NUMBER_MESSAGE } from './constants/configuration.js';

import Car from './classes/car.js';
import RacingCarGame from './classes/racingCarGame.js';

const carNamesInputElement = document.getElementById('car-names-input');
const carNamesSubmitButtonElement = document.getElementById('car-names-submit');
const racingCountInputElement = document.getElementById('racing-count-input');
const racingCountSubmit = document.getElementById('racing-count-submit');

let carNameList = [];
let tryCount = 0;
let isCarNamesValid = false;
let isTryCountValid = false;

const racingCarGame = new RacingCarGame();

carNamesSubmitButtonElement.addEventListener('click', () => {
  carNameList = preProcessCarNamesToCarNameList(carNamesInputElement.value);
  const carNameCheckResult = makeCarNamesCheckResult(carNameList);
  if (
    carNameCheckResult.isAllCarNameDifferent &&
    carNameCheckResult.isCarNameNotLong &&
    carNameCheckResult.isCarNumberEnough
  ) {
    isCarNamesValid = true;
  } else {
    const alertMessage = makeAlertMessage(carNameCheckResult);
    alert(alertMessage);
  }
});

racingCountSubmit.addEventListener('click', () => {
  tryCount = preProcessTryCount(racingCountInputElement.value);
  isTryCountValid = checkTryCount(tryCount);
  if (isTryCountValid === false) {
    alert(INVALID_TRY_COUNT_NUMBER_MESSAGE);
  }
});
