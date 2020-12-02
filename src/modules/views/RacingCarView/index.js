import { splitNamesString } from '../../../utils';

export default class RacingCarView {
  constructor(
    RacingCarModel,
    carNamesInput,
    carNamesSubmitButtton,
    carRacingCountDiv,
  ) {
    this.RacingCarModel = RacingCarModel;
    this.carNamesInput = carNamesInput;
    this.carNamesSubmitButtton = carNamesSubmitButtton;
    this.carRacingCountDiv = carRacingCountDiv;
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
    this.renderCountInputAndSubmitButton();
  }

  renderCountInputAndSubmitButton() {
    this.carRacingCountDiv.innerHTML = `
      <h4>시도할 횟수를 입력해주세요.</h4>
      <input type="number" />
      <button>확인</button>
    `;
  }
}
