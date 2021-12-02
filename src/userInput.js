import { ELEMENT_ID, CAR_NAME_RULES } from './constant';

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
  }

  getCarNameArray() {
    return this.carNameInputEl.value
      .split(CAR_NAME_RULES.separator)
      .map((carName) => carName.trim());
  }
}
