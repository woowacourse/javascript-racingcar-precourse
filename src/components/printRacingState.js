const $resultContainer = document.querySelector('#app > div:last-child');

function printRacingState(currentRacingCars) {
  const racingResultDiv = document.createElement('div');
  let currentRacingState = '';

  currentRacingCars.forEach((car) => {
    const distance = '-'.repeat(car.movingDistance);
    currentRacingState += `<span>${car.name} : ${distance}</span><br />`;
  });
  currentRacingState += `<br />`;
  racingResultDiv.innerHTML = currentRacingState;

  $resultContainer.appendChild(racingResultDiv);
}

function printWinner(winners) {
  const racingWinnerDiv = document.createElement('div');
  const winnersName = winners.map((car) => car.name);
  racingWinnerDiv.innerText = `최종우승자: ${winnersName.join(', ')}`;
  $resultContainer.appendChild(racingWinnerDiv);
}

export { printRacingState, printWinner };
