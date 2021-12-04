import { CAR_NAME_MAX_LENGTH } from '../libs/constant.js';

class CarNamesInputContainer {
  carNamesArray;
  constructor() {
    this.$carNamesInput = document.querySelector('#car-names-input');
    this.$carNamesSubmitButton = document.querySelector('#car-names-submit');
    this.init();
  }

  init() {
    this.triggerCarNamesInputEvent();
  }

  triggerCarNamesInputEvent() {
    this.$carNamesSubmitButton.addEventListener('click', (e) => this.onCarNamesSubmit(e));
  }

  onCarNamesSubmit(e) {
    e.preventDefault();
    const carNames = this.$carNamesInput.value;
    this.carNamesArray = this.strToArr(carNames);
  }

  strToArr(str) {
    const arr = str.split(',');
    return this.filterBlankInArr(arr);
  }

  filterBlankInArr(arr) {
    return arr.filter((el) => el !== '');
  }
}

export default CarNamesInputContainer;
