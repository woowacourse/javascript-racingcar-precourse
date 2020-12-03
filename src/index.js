export default class RacingCarGame {
  constructor(app) {
    app.onclick = this.onClick.bind(this);
    this.carNames = [];
  }

  setCarNames() {
    const carNameInputValue = document.getElementById('car-names-input').value;
    const carNames = this.splitCarNamesWithComma(carNameInputValue);

    if (!this.isValidCarNames(carNames)) {
      return alert('자동차 이름은 5자 이하로 입력해주세요.');
    }

    this.carNames = carNames;
    console.log(this.carNames);
  }

  splitCarNamesWithComma(carNames) {
    return carNames.split(',')
        .filter(carName => carName.trim().length !== 0)
        .map(carName => carName.trim());
  }

  isValidCarNames(carNames) {
    return !carNames.some(carName => carName.length > 5);
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
