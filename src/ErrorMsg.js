export default class ErrorMsg {
  constructor(errorNum) {
    this.errorMsg = this.setError(errorNum);
  };

  setError(errorNum) {
    const ErrorArray = [this.carNumberError(), this.carLengthError(),
      this.carDuplicationError(), this.countError()];
    const errorIndex = (errorNum * -1) - 1;

    return ErrorArray[errorIndex];
  }

  carNumberError() {
    return '2대 이상의 차를 입력해 주세요.\n';
  };

  carLengthError() {
    return '각 자동차의 이름의 길이는 1자이상 5자 이내로 설정해 주세요\n(공백 포함. 단, 공백으로만 이루어진 이름은 허용되지 않습니다.)';
  }

  carDuplicationError() {
    return '자동차는 중복된 이름을 가질 수 없습니다.\n';
  }

  countError() {
    return '1 이상의 자연수를 입력해 주세요.\n';
  }
}
