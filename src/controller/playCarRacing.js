import { default as UI } from '../view/view.js';
import { generateCars, getWinners } from '../utils/utils.js';

const playCarRacing = () => {
  UI.showRacingResultTitle();

  const cars = generateCars(UI.getCarNames());

  Array.from({ length: Number(UI.getRacingCount()) }, () => tryMoveByRound(cars));

  UI.showWiners(getWinners(cars));
};

const tryMoveByRound = cars => {
  cars.forEach(car => car.tryMove());

  UI.showRacingResult(cars);
};

export default playCarRacing;
