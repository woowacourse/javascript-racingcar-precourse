export default class ExceptionHandler {
  constructor() {
    this.MAXSTRINGLENGTH = 5;
    this.MINSTRINGLENGTH = 0;
    this.MINCOUNTNUMBER = 0;
  }

  // CarName 예외 처리
  isCarNames(carNames) {
    let nameValue = false;

    if (carNames !== null) {
      nameValue = true;
    }

    return nameValue;
  }

  isAppropriateCarNames(carNamesArray) {
    let appropriateCarNamesArray = this.isOverLength(carNamesArray);

    if (appropriateCarNamesArray !== null) {
      appropriateCarNamesArray = this.isDuplicateCarNames(carNamesArray);
    }

    return appropriateCarNamesArray;
  }

  isOverLength(carNamesArray) {
    for (let i = 0; i < carNamesArray.length; i++) {
      if (
        carNamesArray[i].length > this.MAXSTRINGLENGTH ||
        carNamesArray[i].length === this.MINSTRINGLENGTH
      ) {
        alert('자동차 이름을 알맞게 적어주세요');

        return null;
      }
    }

    return carNamesArray;
  }

  isDuplicateCarNames(carNamesArray) {
    const setCarNamesArray = new Set(carNamesArray);

    if (setCarNamesArray.size !== carNamesArray.length) {
      alert('중복된 값이 존재합니다.');

      return null;
    }

    return carNamesArray;
  }

  // Count 예외 처리
  isCountNumber(number) {
    let countValue = false;

    if (number > this.MINCOUNTNUMBER && !isNaN(number)) {
      countValue = true;
    }

    return countValue;
  }
}
