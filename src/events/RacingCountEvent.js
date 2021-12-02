import { DOM } from '../constant/constant.js';

export default class RacingCountEvent {
  constructor() {
    this.$racingCountInput = DOM.racingCountInput;
    this.$racingCountSubmit = DOM.racingCountSubmit;
    this.racingCount = 0;
  }

  onClickSubmit = () => {
    this.$racingCountSubmit.addEventListener('click', (event) => {
      event.preventDefault();
      this.racingCount = this.$racingCountInput.value;
      console.log(this.racingCount);
    });
  };
}
