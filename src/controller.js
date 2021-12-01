export default class GameController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
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

    console.log(this.model.getCarNames());
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
    console.log(this.model.getRacingCount());
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
    if (name.length >= 6) {
      return false;
    }
  }
}
