import {
  CarNamesContainer,
  RacingCountContainer,
  RacingResultContainer,
} from './components/index.js';

export default function RacingCarGame() {
  this.state;
  this.carNamesContainer;
  this.racingCountContainer;
  this.racingResultContainer;

  this.setCars = newCars => {
    this.state.cars = newCars;
    this.racingCountContainer.show();
  };

  this.setRacingCount = newRacingCount => {
    this.state.racingCount = newRacingCount;
    this.racing();
  };

  this.racing = () => {
    this.clearCarsDistance();
    this.racingResultContainer.show();
    for (let i = 0; i < this.state.racingCount; i++) {
      this.state.cars.forEach(car => car.move());
      this.racingResultContainer.showRacingProgress();
    }
    this.racingResultContainer.showRacingResult();
  };

  this.clearCarsDistance = () => {
    this.state.cars.forEach(car => car.clear());
    this.racingResultContainer.clear();
  };

  this.state = { cars: [], racingCount: 0 };
  this.carNamesContainer = new CarNamesContainer({ setCars: this.setCars });
  this.racingCountContainer = new RacingCountContainer({
    state: this.state,
    setRacingCount: this.setRacingCount,
  });
  this.racingResultContainer = new RacingResultContainer({ state: this.state });
}

new RacingCarGame();
