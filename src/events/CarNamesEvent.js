import { DOM } from '../constant/constant.js';

export default class CarNamesEvent {
  constructor() {
    this.$carNamesInput = DOM.carNamesInput;
    this.$carNamesSubmit = DOM.carNamesSubmit;
  }

  onClickSubmit = (event) => {
    event.preventDefault();
    console.log(this.$carNamesInput.value);
  };

  submitBtn = () => {
    this.$carNamesSubmit.addEventListener('click', () => this.onClickSubmit(event));
  };
}
