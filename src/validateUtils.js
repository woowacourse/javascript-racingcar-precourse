export default class ValidateUtils {
  static checkCarNames(textList) {
    const newList = textList.filter((item) => this.checkTextLength(item));

    if (textList.length !== newList.length) {
      alert('각 자동차 이름을 1자 이상, 5자 이하로 입력해주세요.');
      return false;
    }
    return true;
  }

  static checkTextLength(text) {
    const maxTextLength = 5;
    if (text.length > maxTextLength || text.length === 0) {
      return false;
    }
    return true;
  }

  static checkNumberAndCarNames(number, textList) {
    if (!textList) {
      alert('자동차 이름들을 입력해주세요.');
      return false;
    }
    if (number <= 0) {
      alert('0이상의 수를 입력해주세요');
      return false;
    }
    return true;
  }
}
