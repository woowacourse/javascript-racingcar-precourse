import {
  $,
  isBlank,
  isIncludeSpace,
  isDuplicated,
  splitUsingComma,
  isOverFiveLetters,
  hasEmptyElement,
  generateCars,
  isZero,
  hasSpecial,
} from '../utils/utils.js';
import { default as UI } from '../view/view.js';
import { ERROR, SELECTOR } from '../utils/constants.js';

export default function RacingCarGame() {
  const init = () => {
    activateEventListeners();
    UI.initSection();
  };

  const activateEventListeners = () => {
    $(SELECTOR.CAR_NAMES_SUBMIT_BUTTON).onclick = handleCarNamesSubmit;
    $(SELECTOR.RACING_COUNT_SUBMIT_BUTTON).onclick = handleRacingCountSubmit;
  };

  const handleCarNamesSubmit = e => {
    e.preventDefault();

    if (!isValidCarNames(UI.getCarNames())) return;

    UI.disableCarNamesForm();
    UI.showRacingCountSection();
  };

  const isValidCarNames = string => {
    if (isBlank(string)) return alert(ERROR.BLANK_SUBMIT);
    if (isIncludeSpace(string)) return alert(ERROR.INCLUDE_SPACE);

    const carNamesArray = splitUsingComma(string);
    if (isDuplicated(carNamesArray)) return alert(ERROR.DUPLICATED);
    if (isOverFiveLetters(carNamesArray)) return alert(ERROR.OVER_FIVE_LETTERS);
    if (hasEmptyElement(carNamesArray)) return alert(ERROR.HAS_EMPTY_ELEMENT);

    return true;
  };

  const handleRacingCountSubmit = e => {
    e.preventDefault();

    if (isBlank(UI.getRacingCount())) return alert(ERROR.BLANK_SUBMIT);
    if (isZero(UI.getRacingCount())) return alert(ERROR.NOT_POSIVITE_INT);
    if (hasSpecial(UI.getRacingCount())) return alert(ERROR.INCLUDE_SPECIAL);

    playCarRacing();

    UI.disableRacingCountForm();
  };

  const playCarRacing = () => {
    UI.showRacingResultTitle();

    const cars = generateCars(UI.getCarNames());

    Array.from({ length: Number(UI.getRacingCount()) }, () => tryMoveByRound(cars));

    UI.showWiners(cars);
  };

  const tryMoveByRound = cars => {
    cars.forEach(car => car.tryMove());

    UI.showRacingResult(cars);
  };

  init();
}
