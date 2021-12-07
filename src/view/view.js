import $ from '../utils/selector.js';

export default class View{
  constructor(controller) {
    this.controller = controller;
    this.countForm = $('#count-form');
    this.countH4 = $('#count-h4');
    this.resultH4 = $('#result-h4');
    this.app = $('#app');
  }

  nameButtonHandler() {
    const nameSubmitButton = $('#car-names-submit');
    const userInput = $('#car-names-input');
    nameSubmitButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.controller.getCarNames(userInput.value);
    });
  }

  countButtonHandler() {
    const countSubmitButton = $('#racing-count-submit');
    const userInput = $('#racing-count-input');
    countSubmitButton.addEventListener('click', (e) => {
      e.preventDefault();
      this.controller.checkCount(userInput.value);
    });
  }

  hideForms() {
    this.countForm.style.visibility = 'hidden';
    this.countH4.style.visibility = 'hidden';
    this.resultH4.style.visibility = 'hidden';
  }

  showCountForm() {
    this.countForm.style.visibility = 'visible';
    this.countH4.style.visibility = 'visible';
  }

  showResultH4(){
    this.resultH4.style.visibility = 'visible';
  }

  printScores(currentScore) {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = currentScore;
    this.app.appendChild(newDiv);
  }

  printWinners(winners) {
    const winnerDiv = document.createElement('div');
    const winnerList = document.createElement('span');
    winnerDiv.innerHTML = '최종 우승자: ';
    winnerList.setAttribute('id', 'racing-winners');
    winnerList.innerHTML = winners;
    winnerDiv.appendChild(winnerList);
    this.app.appendChild(winnerDiv);
  }
}