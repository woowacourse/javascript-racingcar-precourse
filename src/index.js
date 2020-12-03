export default class RacingCarGame {
  constructor(app) {
    app.onclick = this.onClick.bind(this);
    this.carNames = [];
  }

  setCarNames() {
    const carNameInputValue = document.getElementById('car-names-input').value;
    const carNames = this.splitCarNamesWithComma(carNameInputValue);
  }

  splitCarNamesWithComma(carNames) {
    return carNames.split(',')
        .filter(carName => carName.trim().length !== 0)
        .map(carName => carName.trim());
  }

  onClick(event) {
    const targetId = event.target.id;

    if (targetId === 'car-names-submit') {
      this.setCarNames();
    }

    if (targetId === 'racing-count-submit') {

    }
  }
}


new RacingCarGame(document.getElementById('app'));
