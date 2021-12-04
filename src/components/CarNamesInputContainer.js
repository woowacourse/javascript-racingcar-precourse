import { CarNamesInputCheckMethods } from '../utils/validity.js';

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
    if (!this.isCarNamesInputValid(this.carNamesArray)) {
      return;
    }
  }

  isCarNamesInputValid(carNamesArray) {
    return carNamesArray.every((carName) =>
      CarNamesInputCheckMethods.every((CarNamesInputCheckMethod) =>
        CarNamesInputCheckMethod(carName),
      ),
    );
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
