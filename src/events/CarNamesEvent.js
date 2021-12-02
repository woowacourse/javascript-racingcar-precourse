import { DOM } from '../constant/constant.js';

export default class CarNamesEvent {
  constructor() {
    this.$carNamesInput = DOM.carNamesInput;
    this.$carNamesSubmit = DOM.carNamesSubmit;
  }

  submitBtn = () => {
    this.$carNamesSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      console.log(this.$carNamesInput.value);
    });
  };
}
