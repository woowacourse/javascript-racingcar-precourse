export default class GameController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  app() {
    document
      .getElementById('car-names-submit')
      .addEventListener('click', this.submitNameHandler.bind(this));
  }

  submitNameHandler(e) {
    e.preventDefault();
    if (this.getCarNamesInArrayType() === false) {
      this.view.alertMessage(
        '잘못 입력하셨습니다. 자동차 이름은 쉼표를 기준으로 구분하며, 이름은 5자 이하만 가능합니다.'
      );
      return false;
    }
    const carNamesArray = this.model.getCarNames();
    console.log(carNamesArray);
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
