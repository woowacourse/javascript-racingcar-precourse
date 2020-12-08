class RacingResultPrinter {
  constructor() {
    this.racingResultContainer = document.getElementById('racing-result');
  }

  printAll = (racingCarGame) => {
    this.racingResultContainer.innerHTML = '';

    this.printRacingResult(racingCarGame);
    this.printWinnersName(racingCarGame);
  }

  printRacingResult = ({cars, racingCount}) => {
    for (let racingRound = 0; racingRound < racingCount; ++racingRound) {
      const roundResultContainer = this.#createRoundResult(cars, racingRound);

      this.racingResultContainer.appendChild(roundResultContainer);
      this.racingResultContainer.appendChild(document.createElement('br'));
    }
  }

  printWinnersName = ({cars, racingCount}) => {
    const winnersNameContainer = document.createElement('div');
    const winnersName = this.#findWinnersName(cars, racingCount);

    winnersNameContainer.innerHTML = `최종 우승자: ${winnersName.join(', ')}`;

    this.racingResultContainer.appendChild(winnersNameContainer);
  }

  #createRoundResult(cars, racingRound) {
    const roundResultContainer = document.createElement('div');

    cars.forEach((car)=>{
      const roundResultText
      = `${car.name}: ${'-'.repeat(car.moveCount[racingRound])}<br>`;

      roundResultContainer.innerHTML += roundResultText;
    });

    return roundResultContainer;
  }

  #findWinnersName(cars, racingCount) {
    const maxMoveCount = cars
        .map(car => car.moveCount[racingCount - 1])
        .reduce((acc, cur) => Math.max(acc, cur));

    return cars
        .filter(car => car.moveCount[racingCount - 1] === maxMoveCount)
        .map(car => car.name);
  }
}

const racingResultPrinter = new RacingResultPrinter();

export const {printAll} = racingResultPrinter;
