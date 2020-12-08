export default function recordRacingState(currentRacingCars) {
  const $resultContainer = document.querySelector('#app > div:last-child');
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
