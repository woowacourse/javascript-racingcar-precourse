class AppPrinter {
  constructor() {
    this.racingResultContainer = document.getElementById('racing-result');
    this.printRacingResult = this.printRacingResult.bind(this);
    this.printWinnersName = this.printWinnersName.bind(this);
  }

  appendChildAndNewLine(parent, child) {
    parent.appendChild(child);
    parent.appendChild(document.createElement('br'));
  }

  findWinnersName(cars) {
    const racingDistances = cars.map(car => car.moveCount.slice(-1)[0]);
    const maxRacingDistance = Math.max(...racingDistances);

    return cars
        .filter(car => car.moveCount.slice(-1)[0] === maxRacingDistance)
        .map(car => car.name);
  }

  createRoundResult(cars, racingRound) {
    const roundResultContainer = document.createElement('div');

    cars.forEach((car)=>{
      const roundResultText = document.createTextNode(
          `${car.name}: ${'-'.repeat(car.moveCount[racingRound])}`,
      );

      this.appendChildAndNewLine(roundResultContainer, roundResultText);
    });

    return roundResultContainer;
  }

  printRacingResult({cars, racingCount}) {
    for (let racingRound = 0; racingRound < racingCount; ++racingRound) {
      const roundResultContainer = this.createRoundResult(cars, racingRound);

      this.appendChildAndNewLine(
          this.racingResultContainer,
          roundResultContainer,
      );
    }
  }

  printWinnersName(cars) {
    const winnersNameContainer = document.createElement('div');
    const winnersName = this.findWinnersName(cars);

    winnersNameContainer.innerHTML = `최종 우승자: ${winnersName.join(', ')}`;

    this.racingResultContainer.appendChild(winnersNameContainer);
  }
}


export const {printRacingResult, printWinnersName} = new AppPrinter();
