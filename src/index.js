const carNameContainer = document.querySelector('.car-name');
// const tryNumberContainer = document.querySelector(".try-number");
const carNameInput = carNameContainer.querySelector("input[type='text']");
const carNameSubmitBtn = carNameContainer.querySelector('button');
// const tryNumberInput = tryNumberContainer.querySelector("input[type='number']");
// const tryNumberSubmitBtn = tryNumberContainer.querySelector("button");

export default class RacingCarGame {
  constructor() {
    carNameInput.focus();
    this.setEventListeners();
  }

  setEventListeners() {
    this.handleCarNameInput = this.handleCarNameInput.bind(this);
    carNameSubmitBtn.addEventListener('click', this.handleCarNameInput);
  }

  handleCarNameInput() {
    const carNameString = carNameInput.value;
    if (this.isEmptyString(carNameString)) {
      return;
    }
  }

  // 이름이 각각 5자 이상인지, 빈 문자열인 이름을 포함하고 있는지는 배열로 변환한 이후에 검사

  isEmptyString(value) {
    let result = false;
    if (!value) {
      alert('값을 입력해주세요.');
      carNameInput.focus();
      result = true;
    }

    return result;
  }
}

new RacingCarGame();
