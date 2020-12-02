import { splitNamesString } from '../../../utils';

export default class RacingCarView {
  constructor(RacingCarModel, carNamesInput, carNamesSubmitButtton) {
    this.RacingCarModel = RacingCarModel;
    this.carNamesInput = carNamesInput;
    this.carNamesSubmitButtton = carNamesSubmitButtton;
    this.init();
  }

  init() {
    this.carNamesSubmitButtton.addEventListener(
      'click',
      this.handleCarNamesSubmit.bind(this),
    );
  }

  handleCarNamesSubmit() {
    const cars = splitNamesString(this.carNamesInput.value);
    this.RacingCarModel.makeCarInstances(cars);
  }
}
