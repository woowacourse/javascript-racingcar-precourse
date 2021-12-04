function initCarNamesForm(racingGame) {
  const carNamesInput = document.querySelector('#car-names-input');
  const carNamesSubmitButton = document.querySelector('#car-names-submit');
  carNamesSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    racingGame.onSubmitCarNames(carNamesInput);
  });
}

function initRacingCountForm(racingGame) {
  const racingCountInput = document.querySelector('#racing-count-input');
  const racingCountSubmitButton = document.querySelector('#racing-count-submit');
  racingCountSubmitButton.addEventListener('click', (e) => {
    e.preventDefault();
    racingGame.onSubmitRacingCount(racingCountInput);
  });
}

export default function initForms(racingGame) {
  initCarNamesForm(racingGame);
  initRacingCountForm(racingGame);
}
