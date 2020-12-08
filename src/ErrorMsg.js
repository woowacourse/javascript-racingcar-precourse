/**
 * Error Msg for User Input
 */
export default class ErrorMsg {
  /**
   * constructor
   * @param {number} errorNum
   */
  constructor(errorNum) {
    this.errorMsg = this.setError(errorNum);
  };
  /**
   * constructor
   * @param {number} errorNum
   * @return {string}
   */
  setError(errorNum) {
    const ErrorArray = [this.carNumberError(), this.carLengthError(),
      this.carDuplicationError(), this.countError()];
    const errorIndex = (errorNum * -1) - 1;
    return ErrorArray[errorIndex];
  }
  /**
   * error Msg
   * @return {string}
   */
  carNumberError() {
    return '2대 이상의 차를 입력해 주세요.\n';
  };
  /**
   * error Msg
   * @return {string}
   */
  carLengthError() {
    return '각 자동차의 이름의 길이는 5자 이내로 설정해 주세요(공백포함)\n';
  }
  /**
   * error Msg
   * @return {string}
   */
  carDuplicationError() {
    return '자동차는 중복된 이름을 가질 수 없습니다.\n';
  }
  /**
   * error Msg
   * @return {string}
   */
  countError() {
    return '1 이상의 자연수를 입력해 주세요.\n';
  }
}
