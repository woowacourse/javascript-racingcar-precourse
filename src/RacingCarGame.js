import { printRacingState, printWinner } from './components/printRacingState.js';
import { showResultContainer } from './utils/showTags.js';

export default function RacingCarGame(racingCars, racingCount) {
  this.racingCars = racingCars;
  this.racingCount = racingCount;

  this.getWinner = (cars) => {
    const totalRacingDistance = cars.map((car) => car.movingDistance);
    const maxDistance = Math.max(...totalRacingDistance);
    return cars.filter((car) => car.movingDistance === maxDistance);
  };

  this.playRacingGame = () => {
    for (let i = 0; i < this.racingCount; i++) {
      this.racingCars.forEach((value) => value.drive());
      printRacingState(this.racingCars);
    }
    printWinner(this.getWinner(this.racingCars));
    showResultContainer();
  };

  this.playRacingGame();
}
