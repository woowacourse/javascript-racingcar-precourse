import recordRacingState from './components/recordRacingState.js';
import showResults from './components/showResults.js';

export default function RacingCarGame(racingCars, racingCount) {
  this.racingCars = racingCars;
  this.racingCount = racingCount;

  this.playRacingGame = () => {
    for (let i = 0; i < this.racingCount; i++) {
      this.racingCars.forEach((value) => value.drive());
      recordRacingState(this.racingCars);
    }
    showResults();
  };

  this.playRacingGame();
}
