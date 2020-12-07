import {
  CarNamesContainer,
  RacingCountContainer,
  RacingResultContainer,
} from './components/index.js';

export default function RacingCarGame() {
  this.state = { cars: [], racingCount: 0 };

  this.setCars = newCars => {
    this.state.cars = newCars;
    this.racingCountContainer.show();
    this.racingResultContainer.hide();
  };

  this.setRacingCount = newRacingCount => {
    this.state.racingCount = newRacingCount;
    this.clearCarsDistance();
    this.racing();
  };

  this.racing = () => {
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

  this.render = () => {
    this.carNamesContainer = new CarNamesContainer({ setCars: this.setCars });
    this.racingCountContainer = new RacingCountContainer({
      state: this.state,
      setRacingCount: this.setRacingCount,
    });
    this.racingResultContainer = new RacingResultContainer({
      state: this.state,
    });
  };

  this.render();
}

new RacingCarGame();
