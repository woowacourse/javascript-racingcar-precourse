/**
 * 사용자 입력이 유효하지 않을때 발생시키는 에러 클래스
 * @param {string} message - 에러 메세지
 * @param {node} errElem - 에러가 발생한 원인이 되는 엘리먼트
 */

export default class ValidationError extends Error {
  constructor(message, errElem) {
    super(message);
    this.name = this.constructor.name;
    this.errElem = errElem;
  }

  alertUser(){
    alert(this.message);
    if (this.errElem) {
      this.errElem.focus();
    }
  }
}
