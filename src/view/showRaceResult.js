function getPosition(car) {
  let positionString = '';

  for (let index = 0; index < car.getPosition(); index += 1) {
    positionString += '-';
  }
  return positionString;
}

function showResultHead() {
  const $resultHead = document.querySelector('#result');

  $resultHead.style.display = 'block';
}

function getOneRaceResult(cars) {
  let innerHtml = '';

  cars.forEach((car) => {
    innerHtml += `<div>${car.getName()}: ${getPosition(car)}</div>`;
  });
  return innerHtml;
}

export default function showRaceResult(cars) {
  showResultHead();
  const $resultContainer = document.querySelector('#result-container');
  const $oneRaceResult = document.createElement('p');

  $oneRaceResult.innerHTML = getOneRaceResult(cars);
  $resultContainer.append($oneRaceResult);
}
