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
    console.log(this.model.getCarNames());
    console.log(this.model.getRacingCount());
    const carNames = this.model.getCarNames();
    const racingCount = this.model.getRacingCount();
    const eachRacingRecord = {};
    const getResultOfEachCarTurn = car => {
      if (typeof eachRacingRecord[car] === 'undefined') {
        if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
          eachRacingRecord[car] = 1;
        } else {
          eachRacingRecord[car] = 0;
        }
      } else if (typeof eachRacingRecord[car] !== 'undefined') {
        if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
          eachRacingRecord[car]++;
        }
      }
    };

    for (let i = 0; i < racingCount; i++) {
      carNames.forEach(car => getResultOfEachCarTurn(car));
      console.log(eachRacingRecord);
    }

    this.clearGame();
  }

  clearGame() {
    this.isNameSubmitted = false;
    this.isCountSubmitted = false;
  }
}
