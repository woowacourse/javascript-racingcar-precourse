import {isEmpty, isOutOfLength} from './util.js';

class InputAlert {
  alertCarName(carNames) {
    if (isEmpty(carNames)) {
      return alert('자동차 이름을 입력해주세요.');
    }

    if (isOutOfLength(carNames)) {
      return alert('자동차 이름은 5자 이하로 입력해주세요.');
    }

    return alert('자동차 이름을 중복되지 않게 입력해주세요.');
  }

  alertRacingCount(racingCount) {
    if (racingCount < 1) {
      return alert('1 이상의 숫자를 입력해주세요.');
    }

    if (racingCount > 1000) {
      return alert('숫자가 너무 크네요 :( 1000보다 작은 숫자를 입력해주세요.');
    }
  }
}

const inputAlert = new InputAlert();

export const {alertCarName, alertRacingCount} = inputAlert;
