export default function domManipulate(){
  document.querySelector('form > input[type="text"]').id = 'car-names-input';
  document.querySelector('form > input[type="text"] + button').id = 'car-names-submit';
  document.querySelector('form > input[type="number"]').id = 'racing-count-input';
  document.querySelector('form > input[type="number"] + button').id = 'racing-count-submit';

  const app = document.getElementById('app');
  const racingCurrent = document.createElement('span');
  racingCurrent.id = 'racing-current';
  const racingWinners = document.createElement('span');
  racingWinners.id = 'racing-winners';
  app.appendChild(racingCurrent);
  app.appendChild(racingWinners);
}