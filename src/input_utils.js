export default class InputUtils {
  constructor() {
    this.IS_VALID = 1;
    this.IS_NOT_VALID = 0;
    this.setErrorMessage();
  }

  setErrorMessage() {
    this.MAX_LENGTH = '5자 이하로';
    this.OVERLAP = '중복 없이';
    this.MIN_LENGTH = '한 자 이상';
    this.INVALID_COUNT = '양의 정수를 입력해주세요';
  }

  splitWithComma(NameInput) { 
    const carNameArray = NameInput.split(','); 

    return carNameArray;
  }

  checkNameValidity(carNames) {
    this.initErrorType();
    this.checkErrorType(carNames);

    if (this._errorType.MAX_LENGTH + this._errorType.OVERLAP 
      + this._errorType.MIN_LENGTH > 0) {
      this.createErrorMessage();
      this.alertError(this._errorMessage);

      return this.IS_NOT_VALID;
    }
    
    return this.IS_VALID;
  }

  initErrorType() {
    this._errorType = {
      MAX_LENGTH: 0,
      OVERLAP: 0,
      MIN_LENGTH: 0,
    };
  }

  checkErrorType(carNames) {
    carNames.forEach(element => {
      if (this.maxLength(element) === this.IS_NOT_VALID) {
        this._errorType.MAX_LENGTH = 1;
      }

      if (this.overlap(element, carNames) === this.IS_NOT_VALID) {
        this._errorType.OVERLAP = 1;
      }
      
      if (this.minLength(element) === this.IS_NOT_VALID) {
        this._errorType.MIN_LENGTH = 1;
      }
    });
  }

  maxLength(name) {
    if (name.length > 5) {
      return this.IS_NOT_VALID;
    }

    return this.IS_VALID;
  }

  overlap(name, carNames) {
    const carNameSet = new Set(carNames);

    if (carNameSet.size !== carNames.length) {
      return this.IS_NOT_VALID;
    }
    
    return this.IS_VALID;
  }

  minLength(name) {
    if (name === '') {
      return this.IS_NOT_VALID;
    }

    return this.IS_VALID;
  }

  createErrorMessage() {
    this._errorMessage = '자동차 이름을 ';
    this.addErrorTypeMessage();
    this._errorMessage += '입력해주세요';
  }

  addErrorTypeMessage() {
    for (const key in this._errorType) {
      this.getErrorTypeMessage(key);
    }
  }

  getErrorTypeMessage(errorType) {
    if (this._errorType[errorType] === 1) {
      this._errorMessage += `${this[errorType]} `;
    }
  }

  alertError(errorMessage) {
    alert(errorMessage);
  }

  checkCountValidity(countInput) {
    if (this.isZero(countInput) * this.isNull(countInput) 
    * this.isNegative(countInput) === this.IS_NOT_VALID) {
      alert(this.INVALID_COUNT);

      return this.IS_NOT_VALID;
    }

    return this.IS_VALID;
  }

  isZero(number) {
    if (number[0] === '0') {
      return this.IS_NOT_VALID;
    }
    
    return this.IS_VALID;
  }

  isNull(number) {
    if (number === '') {
      return this.IS_NOT_VALID;
    }

    return this.IS_VALID;
  }

  isNegative(number) {
    if (parseInt(number) < 0) {
      return this.IS_NOT_VALID;
    }

    return this.IS_VALID;
  }
}