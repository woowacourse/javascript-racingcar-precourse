export default class GameController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.isNameSubmitted = false;
    this.isCountSubmitted = false;
  }

  app() {
    document
      .getElementById('car-names-submit')
      .addEventListener('click', this.submitNameHandler.bind(this));
    document
      .getElementById('racing-count-submit')
      .addEventListener('click', this.submitCountHandler.bind(this));
  }

  submitNameHandler(e) {
    e.preventDefault();
    if (this.getCarNamesInArrayType() === false) {
      this.view.alertMessage(
        '잘못 입력하셨습니다. 자동차 이름은 쉼표를 기준으로 구분하며, 이름은 5자 이하만 가능합니다.'
      );
      return false;
    }
    this.isNameSubmitted = true;
    this.startRacingGame();
  }

  submitCountHandler(e) {
    e.preventDefault();
    const racingCount = parseInt(
      document.getElementById('racing-count-input').value,
      10
    );

    if (isNaN(racingCount)) {
      this.view.alertMessage(
        '잘못 입력하셨습니다. 레이싱 횟수에는 숫자만 입력해주세요.'
      );
      return false;
    }
    this.model.setRacingCount(racingCount);
    this.isCountSubmitted = true;
    this.startRacingGame();
  }

  getCarNamesInArrayType() {
    let carArray = document.getElementById('car-names-input').value.split(',');
    carArray = carArray.map(car => car.trim());
    for (const name of carArray) {
      if (this.checkIfWrongCarName(name) === false) {
        return false;
      }
    }
    this.model.setCarNames(carArray);
  }

  checkIfWrongCarName(name) {
    if (name.length >= 6 || name.length === 0) {
      return false;
    }
  }

  startRacingGame() {
    if (this.isNameSubmitted === false || this.isCountSubmitted === false) {
      return false;
    }

    const carNames = this.model.getCarNames();
    const racingCount = this.model.getRacingCount();
    for (let i = 0; i < racingCount; i++) {
      carNames.forEach(car => this.getResultOfEachCarTurn.call(this, car));
      this.view.renderEachTurnResult(
        GameController.createEachTurnResultDom(this.model.eachRacingRecord)
      );
    }

    this.clearGame();
  }

  getResultOfEachCarTurn(car) {
    if (typeof this.model.eachRacingRecord[car] === 'undefined') {
      if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
        this.model.eachRacingRecord[car] = 1;
      } else {
        this.model.eachRacingRecord[car] = 0;
      }
    } else if (typeof this.model.eachRacingRecord[car] !== 'undefined') {
      if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
        this.model.eachRacingRecord[car]++;
      }
    }
  }

  clearGame() {
    this.isNameSubmitted = false;
    this.isCountSubmitted = false;
  }

  static createEachTurnResultDom(obj) {
    const resultContainer = document.createElement('div');
    for (const car in obj) {
      if (Object.hasOwnProperty.call(obj, car)) {
        const resultSpan = document.createElement('span');
        resultSpan.innerText = `${car}: ${'-'.repeat(obj[car])}`;
        resultContainer.append(resultSpan);
        resultContainer.append(document.createElement('br'));
      }
    }
    resultContainer.append(document.createElement('br'));
    return resultContainer;
  }
}
