export default class HandleInput {
  constructor() {
    this.is_VALID = 1;
    this.is_NOT_VALID = 0;
    this.MAX_LENGTH = '5자 이하로';
    this.OVERLAP = '중복 없이'
    this.MIN_LENGTH = '한 자 이상';
    this.IS_VALID = 1;
    this.IS_NOT_VALID = 0;
  }

  splitWithComma(NameInput) { 
    const carNameArray = NameInput.split(",") 

    return carNameArray;
  };

  checkNameValidity(carNames) {
    let errortype = {
      MAX_LENGTH: 0,
      OVERLAP: 0,
      MIN_LENGTH: 0,
    }

    carNames.forEach((element) => {
      if (this.maxLength(element) === this.is_NOT_VALID)
        errortype.MAX_LENGTH = 1;

      if (this.overlap(element, carNames) === this.is_NOT_VALID)
        errortype.OVERLAP = 1;
      
      if (this.minLength(element) === this.is_NOT_VALID)
        errortype.MIN_LENGTH = 1;
    });

    console.log(errortype);
    if (errortype.MAX_LENGTH + errortype.OVERLAP + errortype.MIN_LENGTH > 0) {
      this.createErrorMessage(errortype);

      return this.IS_NOT_VALID;
    }
    
    return this.IS_VALID;
  }

  maxLength(name) {
    if (name.length > 5) 
      return this.is_NOT_VALID;

    return this.is_VALID;
  }

  overlap(name, carNames) {
    const carNameSet = new Set(carNames);

    if (carNameSet.length !== carNames.length)
      return this.IS_NOT_VALID;
    
    return this.IS_VALID;
  }

  minLength(name) {
    if (name === "") 
      return this.is_NOT_VALID;

    return this.is_VALID;
  }

  createErrorMessage(errortype) {
    let errorMessage = '자동차 이름을 ';

    if (errortype.MIN_LENGTH === 1)
      errorMessage += `${this.MIN_LENGTH} `;

    if (errortype.MAX_LENGTH === 1)
      errorMessage += `${this.MAX_LENGTH} `;
    
    if (errortype.OVERLAP === 1)
      errorMessage += `${this.OVERLAP} `;

    errorMessage += '입력해주세요'
    
    this.alertError(errorMessage);
  }

  alertError(errorMessage) {
    alert(errorMessage);
  }
}

