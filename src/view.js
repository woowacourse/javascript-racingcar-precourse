export default class RacingView {
  constructor() {
    this.app = document.getElementById('app');
  }

  alertMessage(message) {
    alert(message);
  }

  renderEachTurnResult(eachTurnResult) {
    this.app.insertAdjacentElement('beforeend', eachTurnResult);
  }
}
