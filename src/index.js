export default class RacingCarGame {
  constructor() {
    this.getCarName();
  }

  getCarName() {
    const carNamesSubmitButton = document.querySelector('#car-names-submit');

    carNamesSubmitButton.addEventListener('click', () => {
      const carNames = this.carNames();

      console.log(this.isCarNames(carNames));
    });
  }

  carNames() {
    const carNamesInput = document.querySelector('#car-names-input');

    return carNamesInput.value;
  }

  isCarNames(_carNames) {
    if (_carNames === '') {
      alert('하나 이상 입력해주세요.');

      return null;
    } else {
      // 콤마로 구분해서 배열로 저장하는 기능 넣기

      return _carNames;
    }
  }
}

new RacingCarGame();
