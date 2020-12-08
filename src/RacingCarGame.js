export default function RacingCarGame(racingCars, racingCount) {
  this.racingCars = racingCars;
  this.racingCount = racingCount;

  this.playRacingGame = () => {
    for (let i = 0; i < this.racingCount; i++) {
      this.racingCars.forEach((value) => value.drive());
    }
  };

  this.playRacingGame();
}
