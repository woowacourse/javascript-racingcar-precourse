import {
  ELEMENT_ID,
  CAR_NAME_RULES,
  RACING_COUNT_RULES,
  ERR_MESSAGE,
} from './constant.js';

export default class UserInput {
  constructor() {
    this.carNameInputEl = document.querySelector(ELEMENT_ID.carNameInputId);
    this.carNameSubmitEl = document.querySelector(ELEMENT_ID.carNameSubmitId);
    this.racingCountInputEl = document.querySelector(
      ELEMENT_ID.racingCountInputId,
    );
    this.racingCountSubmitEl = document.querySelector(
      ELEMENT_ID.racingCountSubmitId,
    );
    this.bindEventListener();
  }

  bindEventListener() {
    this.carNameSubmitEl.addEventListener('click', (e) => {
      e.preventDefault();
      this.isValidCarNames();
    });
  }

  getCarNameArray() {
    return this.carNameInputEl.value
      .split(CAR_NAME_RULES.separator)
      .map((carName) => carName.trim());
  }

  isVaildCarNameLength() {
    const carNameArray = this.getCarNameArray();
    for (let i = 0; i < carNameArray.length; i += 1) {
      if (
        carNameArray[i].length < CAR_NAME_RULES.minLength ||
        carNameArray[i].length > CAR_NAME_RULES.maxLength
      ) {
        alert(ERR_MESSAGE.carNameLength);
        return false;
      }
    }

    return true;
  }

  isDifferntCarName() {
    const carNameSet = new Set(this.getCarNameArray());
    if (carNameSet.size !== this.getCarNameArray().length) {
      alert(ERR_MESSAGE.carNameSame);
      return false;
    }

    return true;
  }

  isValidCarNames() {
    return this.isVaildCarNameLength() && this.isDifferntCarName();
  }

  getRacingCount() {
    return this.racingCountInputEl.value;
  }

  isValidRacingCount() {
    if (this.getRacingCount() < RACING_COUNT_RULES.minCount) {
      alert(ERR_MESSAGE.racingCount);
      return false;
    }

    return true;
  }
}
