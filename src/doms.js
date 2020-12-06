export const DOMs = {
  racingCountContainer: document.querySelector('.racing-count'),
  carNameInput: document.getElementById('car-names-input'),
  carNameBtn: document.getElementById('car-names-submit'),
  racingCountInput: document.getElementById('racing-count-input'),
  racingCountBtn: document.getElementById('racing-count-submit'),
  resultBoard: document.querySelector('.result'),
};

export const DOMCtrl = {
  resetCarNameInput() {
    DOMs.carNameInput.value = '';
    DOMs.carNameInput.focus();
  },
  resetRacingCountInput() {
    DOMs.racingCountInput.value = '';
    DOMs.racingCountInput.focus();
  },
  // hide racing-count-input, racing-count-submit & result
  hideUIs() {
    DOMs.racingCountContainer.style.visibility = 'hidden';
    DOMs.resultBoard.style.visibility = 'hidden';
  },
  showRacingCountUI() {
    DOMs.racingCountContainer.style.visibility = 'visible';
    DOMs.racingCountInput.value = '';
    DOMs.racingCountInput.focus();
  },
  showResultUI() {
    DOMs.resultBoard.style.visibility = 'visible';
  },
};
