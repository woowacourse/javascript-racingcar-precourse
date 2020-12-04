const racingCountContainer = document.querySelector('.racing-count');
const carNameInput = document.getElementById('car-names-input');
const carNameSubmitBtn = document.getElementById('car-names-submit');
const racingCountInput = document.getElementById('racing-count-input');
const racingCountSubmitBtn = document.getElementById('racing-count-submit');
const resultDiv = document.querySelector('.result');

export default class RacingCarGame {
  constructor() {
    this.nameOfCars = [];
    this.racingCount = 0;

    this.hideUIs();
    this.setEventListeners();
    this.resetCarNameInput();
  }

  // hide racing-count-input, racing-count-submit & result
  hideUIs() {
    racingCountContainer.style.visibility = 'hidden';
    resultDiv.style.visibility = 'hidden';
  }

  setEventListeners() {
    this.handleCarNameInput = this.handleCarNameInput.bind(this);
    carNameSubmitBtn.addEventListener('click', this.handleCarNameInput);
    carNameInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        this.handleCarNameInput();
      }
    });
    this.handleRacingCountInput = this.handleRacingCountInput.bind(this);
    racingCountSubmitBtn.addEventListener('click', this.handleRacingCountInput);
    racingCountInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') {
        this.handleRacingCountInput();
      }
    });
  }

  handleCarNameInput() {
    const carNameInputValue = carNameInput.value;
    if (this.isEmptyString(carNameInputValue)) {
      alert('값을 입력해주세요.');
      this.resetCarNameInput();
      return;
    }
    const carNames = this.getCarNamesArray(carNameInputValue);
    if (this.isNotProperCarNamesArray(carNames)) {
      this.resetCarNameInput();
      return;
    }

    this.nameOfCars = carNames;
    this.showRacingCountUI();
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

  resetCarNameInput() {
    carNameInput.value = '';
    carNameInput.focus();
  }

  showRacingCountUI() {
    racingCountContainer.style.visibility = 'visible';
    racingCountInput.focus();
  }

  handleRacingCountInput() {
    const racingCountInputValue = racingCountInput.value;
    if (this.isNotProperRacingCountInputValue(racingCountInputValue)) {
      this.resetRacingCountInput();
      return;
    }
    this.racingCount = racingCountInputValue;
    console.log(this.racingCount);
  }

  isNotProperRacingCountInputValue(value) {
    let result = false;
    if (this.isEmptyString(value) || isNaN(value)) {
      alert('숫자를 입력해주세요.');
      result = true;
    }

    return result;
  }

  resetRacingCountInput() {
    racingCountInput.value = '';
    racingCountInput.focus();
  }
}

new RacingCarGame();
