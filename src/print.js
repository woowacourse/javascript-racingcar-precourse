import * as RacingUtil from './racing-util.js';

function createRacingResultElement(racingCars, racingResult) {
  const racingResultDiv = document.createElement('div');

  racingCars.forEach((racingCar, i)=>{
    if (racingResult[i]) racingCar.plusRacingResult();

    const racingResultText = `${racingCar.name}: ${racingCar.racingResult}`;
    const racingResultTextNode = document.createTextNode(racingResultText);
    racingResultDiv.appendChild(racingResultTextNode);
    racingResultDiv.appendChild(document.createElement('br'));
  });

  return racingResultDiv;
}

function findWinnersName(racingCars) {
  const racingDistance = racingCars.map((racingCar) => {
    return racingCar.racingResult.length;
  });

  const maxRacingDistance = Math.max(...racingDistance);

  return racingCars
      .filter((racingCar) => {
        return racingCar.racingResult.length === maxRacingDistance;
      })
      .map(racingCar => racingCar.name);
}

function getRacingResult(racingCars, racingOrder) {
  return racingCars.map(racingCar =>
    RacingUtil.isForward(racingCar.randomRacingNumbers[racingOrder]),
  );
}

export function printRacingResult(racingCars, racingCount) {
  const racingResultElement = document.getElementById('racing-result');

  for (let i = 0; i < racingCount; ++i) {
    const racingResult = getRacingResult(racingCars, i);
    const racingResultDiv
    = createRacingResultElement(racingCars, racingResult);

    racingResultElement.appendChild(racingResultDiv);
    racingResultElement.appendChild(document.createElement('br'));
  }
}

export function printWinnersName(racingCars) {
  const racingResultElement = document.getElementById('racing-result');
  const winnersName = findWinnersName(racingCars);
  const winnersNameText = `최종 우승자: ${winnersName.join(', ')}`;
  const winnersNameTextNode = document.createTextNode(winnersNameText);
  const winnersNameDiv = document.createElement('div');

  winnersNameDiv.appendChild(winnersNameTextNode);
  racingResultElement.appendChild(winnersNameDiv);
}
