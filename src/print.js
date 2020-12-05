import * as RacingUtil from './racing-util.js';

function createRacingResultElement(cars, racingResult) {
  const racingResultDiv = document.createElement('div');

  cars.forEach((car, i)=>{
    if (racingResult[i]) car.plusRacingResult();

    const racingResultText = `${car.name}: ${car.racingResult}`;
    const racingResultTextNode = document.createTextNode(racingResultText);
    racingResultDiv.appendChild(racingResultTextNode);
    racingResultDiv.appendChild(document.createElement('br'));
  });

  return racingResultDiv;
}

function findWinnersName(cars) {
  const racingDistance = cars.map((car) => {
    return car.racingResult.length;
  });

  const maxRacingDistance = Math.max(...racingDistance);

  return cars
      .filter((car) => {
        return car.racingResult.length === maxRacingDistance;
      })
      .map(car => car.name);
}

function getRacingResult(cars, racingOrder) {
  return cars.map(car =>
    RacingUtil.isForward(car.randomRacingNumbers[racingOrder]),
  );
}

export function printRacingResult({cars, racingCount}) {
  document.getElementById('result').hidden = false;
  const racingResultElement = document.getElementById('racing-result');

  for (let i = 0; i < racingCount; ++i) {
    const racingResult = getRacingResult(cars, i);
    const racingResultDiv
    = createRacingResultElement(cars, racingResult);

    racingResultElement.appendChild(racingResultDiv);
    racingResultElement.appendChild(document.createElement('br'));
  }
}

export function printWinnersName(cars) {
  const racingResultElement = document.getElementById('racing-result');
  const winnersName = findWinnersName(cars);
  const winnersNameText = `최종 우승자: ${winnersName.join(', ')}`;
  const winnersNameTextNode = document.createTextNode(winnersNameText);
  const winnersNameDiv = document.createElement('div');

  winnersNameDiv.appendChild(winnersNameTextNode);
  racingResultElement.appendChild(winnersNameDiv);
}
