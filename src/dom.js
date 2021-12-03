export const setInitialStyle = () => {
  const racingCountText = document.getElementById('racing-count-text');
  const racingCountForm = document.getElementById('racing-count-form');
  const racingResultText = document.getElementById('racing-result-text');

  racingCountText.style.display = 'none';
  racingCountForm.style.display = 'none';
  racingResultText.style.display = 'none';
};

export const displayCountForm = () => {
  const racingCountText = document.getElementById('racing-count-text');
  const racingCountForm = document.getElementById('racing-count-form');

  racingCountText.style.display = 'block';
  racingCountForm.style.display = 'block';
};

export const displayResultText = () => {
  const racingResultText = document.getElementById('racing-result-text');

  racingResultText.style.display = 'block';
};

export const createRacingLog = (cars) => {
  const app = document.getElementById('app');
  const log = document.createElement('p');

  cars.forEach((car) => {
    log.innerHTML += `${car.name}: ${'-'.repeat(car.location)} <br>`;
  });

  app.appendChild(log);
};
