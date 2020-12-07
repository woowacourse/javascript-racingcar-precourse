export default class Validation {
  errorMessage = '';

  setErrorMessage(errorMessage) {
    this.errorMessage = errorMessage;
  }

  isNotDuplicate(carNamesArray) {
    const _carNamesSet = new Set(carNamesArray);
    if (carNamesArray.length !== _carNamesSet.size) {
      this.setErrorMessage('중복된 이름이 존재합니다. 다시 입력해주세요.');
      return false;
    }
    return true;
  }

  isPossibleCarNames(carNamesArray) {
    const isPossible = (name) => {
      if (/\s/g.test(name)) {
        this.setErrorMessage('공백이 포함되어 있습니다. 다시 입력해주세요.');
        return false;
      }
      if (name.length === 0 || name.length > 5) {
        this.setErrorMessage('이름은 5글자 이하이어야 합니다. 다시 입력해주세요.');
        return false;
      }
      return true;
    };
    return carNamesArray.every(isPossible.bind(this)) &&
      this.isNotDuplicate(carNamesArray);
  }


  isPossibleRacingCount(racingCount) {
    if (racingCount === 0 || racingCount.length === 0) {
      this.setErrorMessage('최소 1 이상의 숫자를 입력해주세요.');
      return false;
    }
    return true;
  }

  renderError() {
    alert(this.errorMessage);
  }
}
