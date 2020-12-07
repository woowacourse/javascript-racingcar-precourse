import {
  racingProgress,
  racingResult,
  racingResultHeading,
} from '../templates/index.js';

export default function RacingResultContainer({ state }) {
  this.racingResultContainer = document.querySelector(
    '.racing-result-container'
  );

  this.clear = () => {
    this.racingResultContainer.innerHTML = racingResultHeading();
  };

  this.show = () => {
    this.racingResultContainer.classList.remove('hide');
  };

  this.hide = () => {
    this.racingResultContainer.classList.add('hide');
  };

  this.showRacingProgress = () => {
    this.racingResultContainer.innerHTML += racingProgress(state.cars);
  };

  this.showRacingResult = () => {
    const maxDistance = Math.max(...state.cars.map(car => car.distance));
    const winnerCars = state.cars.filter(car => car.distance === maxDistance);
    this.racingResultContainer.innerHTML += racingResult(winnerCars);
  };
}
