const $racingCountInputContainer = document.querySelector('#racing-count-input').closest('div');
const $resultContainer = document.querySelector('#app > div:last-child');

function showRacingCountInputContainer() {
  $racingCountInputContainer.style.visibility = 'visible';
}

function showResultContainer() {
  $resultContainer.style.visibility = 'visible';
}

export { showRacingCountInputContainer, showResultContainer };
