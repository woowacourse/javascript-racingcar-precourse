/**
 * 유저의 입력을 관리하는 클래스
 * 기능 구현 목록 - 입력 부분을 담당
 */
import ValidationError from './validationError.js';

export default class Scanner {
  static getRacingCountFromUser(racingCountInput) {
    const racingCount = Number(racingCountInput.value);
    if (!racingCountInput.value || Number.isNaN(racingCount)) {
      throw new ValidationError('숫자를 입력해주세요', racingCountInput);
    }
    if (!Number.isInteger(racingCount) || racingCount <= 0) {
      throw new ValidationError('자연수를 입력해주세요', racingCountInput);
    }

    return racingCount;
  }

  static getCarNamesInputToList(carNamesInput) {
    const regexp = /[^,\s]+(?:[^,]*[^,\s]+)*/gi; // ','와 양쪽 공백을 제외한 부분만 가져온다
    const carNamesList = carNamesInput.value.match(regexp);
    if (!carNamesList) {
      throw new ValidationError('자동차 이름을 입력해주세요', carNamesInput);
    }
    if (carNamesList.some(arr => arr.length > 5)) {
      throw new ValidationError(
        '자동차 이름은 5자 이하로 입력해주세요',
        carNamesInput,
      );
    }

    return carNamesList;
  }
}
