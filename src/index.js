const carNameContainer = document.querySelector('.car-name');
// const tryNumberContainer = document.querySelector(".try-number");
const carNameInput = carNameContainer.querySelector("input[type='text']");
const carNameSubmitBtn = carNameContainer.querySelector('button');
// const tryNumberInput = tryNumberContainer.querySelector("input[type='number']");
// const tryNumberSubmitBtn = tryNumberContainer.querySelector("button");

export default class RacingCarGame {
  constructor() {
    this.resetTextInput();
    this.setEventListeners();
  }

  setEventListeners() {
    this.handleCarNameInput = this.handleCarNameInput.bind(this);
    carNameSubmitBtn.addEventListener('click', this.handleCarNameInput);
  }

  handleCarNameInput() {
    const carNameString = carNameInput.value;
    if (this.isEmptyString(carNameString)) {
      alert('값을 입력해주세요.');
      this.resetTextInput();
      return;
    }

    const carNames = this.getCarNamesArray(carNameString);
    if (this.isNotProperCarNamesArray(carNames)) {
      this.resetTextInput();
      return;
    }
  }

  isEmptyString(value) {
    return !value;
  }

  getCarNamesArray(value) {
    return value.split(',').map(name => name.trim());
  }

  isNotProperCarNamesArray(arr) {
    let result = false;
    arr.forEach(carName => {
      if (result === false) {
        if (this.isLongerThanFive(carName)) {
          alert('5자가 넘는 이름이 존재합니다.');
          result = true;
        } else if (this.isEmptyString(carName)) {
          alert('이름 중에 빈 문자열이 존재합니다.');
          result = true;
        }
      }
    });

    return result;
  }

  isLongerThanFive(value) {
    return value.length > 5;
  }

  resetTextInput() {
    carNameInput.value = '';
    carNameInput.focus();
  }
}

new RacingCarGame();
