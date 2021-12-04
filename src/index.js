import { ELEMENT_ID } from './constants/index.js';
import GameController from './controllers/gameController.js';
import { parseCars, parseRacingCount } from './controllers/inputParser.js';
import {
  carNamesInputValidator,
  racingCountInputValidator,
} from './controllers/inputValidator.js';
import Game from './models/game.js';
import { handleError } from './utils/errorHandler.js';
import DOMElement from './views/domElement.js';

const $app = DOMElement.createById(ELEMENT_ID.APP);
const $carNamesInput = DOMElement.createById(ELEMENT_ID.CAR_NAMES_INPUT);
const $carNamesSubmit = DOMElement.createById(ELEMENT_ID.CAR_NAMES_SUBMIT);
const $racingCountLabel = DOMElement.createById(ELEMENT_ID.RACING_COUNT_LABEL);
const $racingCountForm = DOMElement.createById(ELEMENT_ID.RACING_COUNT_FORM);
const $racingCountInput = DOMElement.createById(ELEMENT_ID.RACING_COUNT_INPUT);
const $racingCountSubmit = DOMElement.createById(
  ELEMENT_ID.RACING_COUNT_SUBMIT
);
const $resultLabel = DOMElement.createById(ELEMENT_ID.RESULT_LABEL);

const startGame = () => {
  const cars = parseCars($carNamesInput.getValue());
  const racingCount = parseRacingCount($racingCountInput.getValue());

  const gameModel = new Game(cars, racingCount);
  const $gameView = $app;
  const gameController = new GameController(gameModel, $gameView);

  gameController.progressGameToEnd();
};

const handleCarNamesSubmit = () => {
  const carNamesText = $carNamesInput.getValue();
  const validationResult = carNamesInputValidator.run(carNamesText);

  if (!validationResult.isSuccess) {
    handleError(validationResult.rejectType);
    return;
  }

  $carNamesInput.setDisabled(true);
  $carNamesSubmit.setDisabled(true);
  $racingCountLabel.show();
  $racingCountForm.show();
};

const handleRacingCountSubmit = () => {
  const racingCountText = $racingCountInput.getValue();
  const validationResult = racingCountInputValidator.run(racingCountText);

  if (!validationResult.isSuccess) {
    handleError(validationResult.rejectType);
    return;
  }

  $racingCountInput.setDisabled(true);
  $racingCountSubmit.setDisabled(true);
  $resultLabel.show();

  startGame();
};

const initializeHTML = () => {
  $racingCountLabel.hide();
  $racingCountForm.hide();
  $resultLabel.hide();

  $carNamesSubmit.addOnClick(handleCarNamesSubmit, true);
  $racingCountSubmit.addOnClick(handleRacingCountSubmit, true);
};

initializeHTML();
