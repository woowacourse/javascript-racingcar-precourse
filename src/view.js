export default class RacingView {
  constructor(model) {
    this.model = model;
    this.app = document.getElementById('app');
  }

  alertMessage(message) {
    alert(message);
  }

  renderEachTurnResult(eachTurnResult) {
    this.app.insertAdjacentElement('beforeend', eachTurnResult);
  }

  removeResultContainer() {
    if (this.model.isGameOver === true) {
      document
        .querySelectorAll('#resultContainer')
        .forEach(elem => elem.parentNode.removeChild(elem));
    }
  }
}
