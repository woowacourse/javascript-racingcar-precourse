export default class RacingCarGame {
  constructor() {
    this.getCarName();
  }

  getCarName() {
    const carNamesSubmitButton = document.querySelector('#car-names-submit');

    carNamesSubmitButton.addEventListener('click', () => {
      const carNamesString = this.carNames();
      const carNamesArray = this.isCarNames(carNamesString);

      console.log(carNamesArray);

      return carNamesArray;
    });
  }

  carNames() {
    const carNamesInput = document.querySelector('#car-names-input');

    return carNamesInput.value;
  }

  isCarNames(_carNames) {
    let carNamesArray = null;

    if (_carNames === '') {
      alert('하나 이상 입력해주세요.');
    } else {
      carNamesArray = this.separateCarNames(_carNames);
    }

    return carNamesArray;
  }

  separateCarNames(_carNames) {
    const carNamesArray = _carNames.split(',');
    const appropriateCarNamesArray = this.isAppropriateCarNames(carNamesArray);

    return appropriateCarNamesArray;
  }

  isAppropriateCarNames(_carNamesArray) {
    let appropriateCarNamesArray = this.isOverLength(_carNamesArray);

    if (appropriateCarNamesArray != null) {
      appropriateCarNamesArray = this.isDuplicateCarNames(_carNamesArray);
    }

    return appropriateCarNamesArray;
  }

  isOverLength(_carNamesArray) {
    for (let i = 0; i < _carNamesArray.length; i++) {
      if (_carNamesArray[i].length > 5 || _carNamesArray[i].length == 0) {
        alert('자동차 이름을 알맞게 적어주세요');

        return null;
      }
    }

    return _carNamesArray;
  }

  isDuplicateCarNames(_carNamesArray) {
    const setCarNamesArray = new Set(_carNamesArray);

    if (setCarNamesArray.size != _carNamesArray.length) {
      alert('중복된 값이 존재합니다.');

      return null;
    }

    return _carNamesArray;
  }
}

new RacingCarGame();
