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

  handleRacingCountSubmit() {
    const racingCount = document.getElementById('#racing-count-input').value;

    for (let i = 0; i < racingCount; i++) {
      this.RacingCarModel.progress();
    }
    console.log(this.RacingCarModel.getCars());
  }

  addEventListenerToRacingCountSubmitButton() {
    document
      .getElementById('#racing-count-submit')
      .addEventListener('click', this.handleRacingCountSubmit.bind(this));
  }

  renderCountInputAndSubmitButton() {
    this.carRacingCountDiv.innerHTML = `
      <h4>시도할 횟수를 입력해주세요.</h4>
      <input type="number" id="#racing-count-input"/>
      <button id="#racing-count-submit">확인</button>
    `;
    this.addEventListenerToRacingCountSubmitButton();
  }

  renderResult() {}
}
