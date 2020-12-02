export default class RacingCarView {
  constructor(RacingCarModel, carNamesInput) {
    this._RacingCarModel = RacingCarModel;
    this.carNamesInput = carNamesInput;
  }

  handleCarNamesSubmit() {
    const names = this.carNamesInput.value;
  }
}
