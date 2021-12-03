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

export const createWinnersText = (winners) => {
  const app = document.getElementById('app');
  const racingWinnersText = document.createElement('span');
  const racingWinners = document.createElement('span');
  racingWinners.setAttribute('id', 'racing-winners');

  console.log(winners.join(', '));

  racingWinnersText.innerHTML = '최종 우승자: ';
  racingWinners.innerHTML = `${winners.join(', ')}`;

  app.appendChild(racingWinnersText);
  app.appendChild(racingWinners);
};
