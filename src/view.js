export default class CarView {
  constructor(model) {
    this.model = model;
    this.app = document.getElementById('app');
  }

  alertMessage(message) {
    alert(message);
  }

  renderResult(eachTurnResult) {
    this.app.insertAdjacentElement('beforeend', eachTurnResult);
  }

  removeResultContainer() {
    if (this.model.isGameOver === true) {
      document
        .querySelectorAll('#resultContainer')
        .forEach(elem => elem.parentNode.removeChild(elem));
    }
  }

  renderWinner(winner) {
    this.app.insertAdjacentElement('afterend', winner);
  }

  removeWinnerSpan() {
    if (this.model.isGameOver === true) {
      document.getElementById('racing-winners-container').remove();
    }
  }
}
