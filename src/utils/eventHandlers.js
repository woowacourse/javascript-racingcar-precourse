import Car from '../classes/car.js';
import RacingCarGame from '../classes/racingCarGame.js';

import { makeRaceCourseProcessRecordsTemplate } from '../templates/templates.js';
import { checkTryCount, makeCarNamesCheckResult } from './validation.js';
import {
  preProcessCarNamesToCarNameList,
  preProcessTryCount,
} from './preProcess.js';
import {
  makeInvalidCarNamesAlertMessage,
  makeNotEnoughConditionAlertMessage,
} from './alert.js';

import elements from '../store/elements.js';

let carNameList = [];
const gamePlayCondition = {
  isCarNamesValid: false,
  isCarNamesSubmitted: false,
  isTryCountValid: false,
};

const {
  carNamesInputElement,
  racingCountInputElement,
  racingProcessRecordsElement,
  racingWinnersElement,
} = elements;

const registerCarNames = () => {
  const carNames = carNamesInputElement.value;
  carNameList = preProcessCarNamesToCarNameList(carNames);
  const carNameCheckResult = makeCarNamesCheckResult(carNameList);
  const alertMessage = makeInvalidCarNamesAlertMessage(carNameCheckResult);
  if (alertMessage === '') {
    gamePlayCondition.isCarNamesSubmitted = true;
    gamePlayCondition.isCarNamesValid = true;
  } else {
    alert(alertMessage);
  }
};

const markCarNameSubmitted = () => {
  gamePlayCondition.isCarNamesSubmitted = false;
};

const getRaceGameWinners = (racingCarGame) => {
  const winnerList = racingCarGame.getWinnerCarNameList();
  const winnerListText = winnerList.join(', ');

  return winnerListText;
};

const addCarsToRaceCourse = (racingCarGame) => {
  carNameList.forEach((carName) => {
    const car = new Car(carName);
    racingCarGame.addCarToRaceCourse(car);
  });
};

const getRaceGameResultInfo = ({ racingCarGame, tryCount }) => {
  addCarsToRaceCourse(racingCarGame);
  racingCarGame.play(tryCount);
  const raceCourseProcessRecordsTemplate = makeRaceCourseProcessRecordsTemplate(
    racingCarGame.raceCourseProcessRecords
  );
  const winnerListText = getRaceGameWinners(racingCarGame);

  return {
    raceCourseProcessRecordsTemplate,
    winnerListText,
  };
};

const showRaceRameResult = (tryCount) => {
  const racingCarGame = new RacingCarGame();
  const {
    winnerListText,
    raceCourseProcessRecordsTemplate,
  } = getRaceGameResultInfo({ racingCarGame, tryCount });
  racingProcessRecordsElement.innerHTML = raceCourseProcessRecordsTemplate;
  racingWinnersElement.innerText = winnerListText;
};

const startRaceGame = () => {
  const tryCountInput = racingCountInputElement.value;
  const tryCount = preProcessTryCount(tryCountInput);
  gamePlayCondition.isTryCountValid = checkTryCount(tryCount);
  const alertMessage = makeNotEnoughConditionAlertMessage(gamePlayCondition);
  if (alertMessage === '') {
    showRaceRameResult(tryCount);
  } else {
    alert(alertMessage);
  }
};

export default {
  registerCarNames,
  markCarNameSubmitted,
  startRaceGame,
};
