export default class RacingCarGame {
  constructor(app) {
    app.onclick = this.onClick.bind(this);
    this.carNames = [];
  }

  setCarNames(carNames) {
    carNames = this.splitCarNamesWithComma(carNames);

    if (!this.isValidCarNames(carNames)) {
      return this.invaildCarNameAlert(carNames);
    }

    this.carNames = carNames;
    console.log(this.carNames);
  }

  setRacingCount() {

  }

  invaildCarNameAlert(carNames) {
    if (carNames.length === 0) {
      alert('자동차 이름을 입력해주세요.');
    } else if (this.isOutOfLength(carNames)) {
      alert('자동차 이름은 5자 이하로 입력해주세요.');
    } else {
      alert('자동차 이름을 중복되지 않게 입력해주세요.');
    }
  }

  splitCarNamesWithComma(carNames) {
    return carNames.split(',')
        .filter(carName => carName.trim().length !== 0)
        .map(carName => carName.trim());
  }

  isValidCarNames(carNames) {
    if (carNames.length === 0
      || this.isOutOfLength(carNames)
      || this.isDuplicate(carNames)) {
      return false;
    }

    return true;
  }

  isOutOfLength(carNames) {
    return carNames.some(carName => carName.length > 5);
  }

  isDuplicate(carNames) {
    return carNames.some(carName =>
      carNames.indexOf(carName) !== carNames.lastIndexOf(carName),
    );
  }

  showRacingCount() {
    if (this.carNames.length > 0) {
      document.getElementById('racing-count').hidden = false;
    }
  }

  onClick(event) {
    const targetId = event.target.id;

    if (targetId === 'car-names-submit') {
      const carNames = document.getElementById('car-names-input').value;

      this.setCarNames(carNames);
      this.showRacingCount();
    }

    if (targetId === 'racing-count-submit') {
      this.setRacingCount();
    }
  }
}


new RacingCarGame(document.getElementById('app'));
