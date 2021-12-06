import { $, generateCars } from '../utils/utils.js';
import { default as UI } from '../view/view.js';
import { SELECTOR } from '../utils/constants.js';
import { isValidCarNames, isValidRacingCount } from '../utils/validators.js';

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

  const handleRacingCountSubmit = e => {
    e.preventDefault();

    if (!isValidRacingCount(UI.getRacingCount())) return;

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
