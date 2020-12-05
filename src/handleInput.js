import { errorMessages } from "./errorMessages.js";

export default class HandleInput {
  constructor() {
    this.is_VALID = 1;
    this.is_NOT_VALID = 0;
    this.LENGTH_OVER_FIVE = '5자 이하로';
    this.TOO_MANY_NAMES = '10개 이내로';
    this.TOO_FEW_NAME = '한 자 이상의 자동차 이름을 입력해주세요';
  }

  checkNameValidity(carNames) {
    let errortype = {
      LENGTH_OVER_FIVE: 0,
      TOO_MANY_NAMES: 0,
      TOO_FEW_NAME: 0,
    }

    carNames.forEach((element) => {
      if (this.lengthOverFive(element) === this.is_NOT_VALID)
        errortype.LENGTH_OVER_FIVE = 1;

      if (this.tooManyNames(element) === this.is_NOT_VALID)
        errortype.TOO_MANY_NAMES = 1;
      
      if (this.tooFewName(element) === this.is_NOT_VALID)
        errortype.TOO_FEW_NAME = 1;
    });

    this.createErrorMessage(errortype);
  }

  createErrorMessage(errortype) {
    let errorMessage = '';

    if (errortype.LENGTH_OVER_FIVE === 1 && errortype.TOO_MANY_NAMES === 1)
      errorMessage = `자동차 이름을 ${this.LENGTH_OVER_FIVE}, ${this.TOO_MANY_NAMES} 입력해주세요`
    
    if (errortype.LENGTH_OVER_FIVE === 1)
      errorMessage = `자동차 이름을 ${this.LENGTH_OVER_FIVE} 입력해주세요`
    
    if (errortype.TOO_MANY_NAMES === 1)
      errorMessage = `자동차 이름을 ${this.TOO_MANY_NAMES} 입력해주세요`
    
    if (errortype.TOO_FEW_NAME === 1)
      errorMessage = this.TOO_FEW_NAME;
    
    this.alertError(errorMessage);
  }

  alertError(errorMessage) {
    alert(errorMessage);
  }

  lengthOverFive(name) {
    if (name.length > 5) 
      return this.is_NOT_VALID;

    return this.is_VALID;
  }

  tooFewName(name) {
    if (name === "") 
      return this.is_NOT_VALID;

    return this.is_VALID;
  }

  tooManyNames(name) {
    if (name.length > 10) 
      return this.is_NOT_VALID;

    return this.is_VALID;
  }
}
