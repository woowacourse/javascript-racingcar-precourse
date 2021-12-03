export default class ValidateUtils {
  static carNamesText(textList) {
    const newList = textList.filter((item) => this.checkTextLength(item));

    if (textList.length !== newList.length) {
      alert('각 자동차 이름을 1자 이상, 5자 이하로 입력해주세요.');
      return false;
    }
    return true;
  }

  static checkTextLength(text) {
    if (text.length > 5 || text.length === 0) {
      return false;
    }
    return true;
  }
}
