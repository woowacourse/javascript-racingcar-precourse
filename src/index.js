import { ELEMENT_ID } from './constants/index.js';
import DOMElement from './views/domElement.js';

const $carNamesInput = DOMElement.createById(ELEMENT_ID.CAR_NAMES_INPUT);
const $carNamesSubmit = DOMElement.createById(ELEMENT_ID.CAR_NAMES_SUBMIT);
const $racingCountLabel = DOMElement.createById(ELEMENT_ID.RACING_COUNT_LABEL);
const $racingCountForm = DOMElement.createById(ELEMENT_ID.RACING_COUNT_FORM);
const $racingCountInput = DOMElement.createById(ELEMENT_ID.RACING_COUNT_INPUT);
const $racingCountSubmit = DOMElement.createById(
  ELEMENT_ID.RACING_COUNT_SUBMIT
);
const $racingResult = DOMElement.createById(ELEMENT_ID.RACING_RESULT);

const renderWinnerNames = (winnerNames) => {
  const $winnerWrapper = DOMElement.createByTagName('div');
  $winnerWrapper.setText('최종 우승자: ');

  const $winner = DOMElement.createByTagName('span');
  $winner.setId(ELEMENT_ID.RACING_WINNERS);
  $winner.setText(winnerNames.join(','));

  $winnerWrapper.appendChild($winner);
  $racingResult.appendChild($winnerWrapper);
};

const main = () => {
  // TO BE IMPLEMENTED
};

main();
