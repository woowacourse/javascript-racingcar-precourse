import { ELEMENT_ID } from './constants/index.js';
import {
  carNamesInputValidator,
  racingCountInputValidator,
} from './controllers/inputValidator.js';
import GameController from './controllers/gameController.js';
import { handleError } from './utils/errorHandler.js';
import DOMElement from './views/domElement.js';
import { parseCars, parseRacingCount } from './controllers/inputParser.js';

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

const renderCurrentRound = (game) => {
  const $round = DOMElement.createByTagName('div');

  game.lines.forEach((line) => {
    const $line = DOMElement.createByTagName('div');
    $line.setText(`${line.car.name}: ${'-'.repeat(line.position)}`);
    $round.appendChild($line);
  });

  $app.appendChild($round);
  $app.appendChild(DOMElement.createByTagName('br'));
};

const renderWinnerNames = (game) => {
  const winnerNames = game.calculateWinLines().map((line) => line.car.name);

  const $winnerWrapper = DOMElement.createByTagName('div');
  $winnerWrapper.setText('최종 우승자: ');

  const $winner = DOMElement.createByTagName('span');
  $winner.setId(ELEMENT_ID.RACING_WINNERS);
  $winner.setText(winnerNames.join(','));

  $winnerWrapper.appendChild($winner);
  $app.appendChild($winnerWrapper);
};

const progressGame = () => {
  const cars = parseCars($carNamesInput.getValue());
  const racingCount = parseRacingCount($racingCountInput.getValue());
  const game = new GameController(cars, racingCount);

  for (let i = 0; i < game.racingCount; i += 1) {
    game.progressOneRacing();
    renderCurrentRound(game);
  }

  renderWinnerNames(game);
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

  progressGame();
  $resultLabel.show();
};

const main = () => {
  $racingCountLabel.hide();
  $racingCountForm.hide();
  $resultLabel.hide();

  $carNamesSubmit.addOnClick(handleCarNamesSubmit, true);
  $racingCountSubmit.addOnClick(handleRacingCountSubmit, true);
};

main();
