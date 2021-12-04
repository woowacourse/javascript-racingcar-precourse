export default class Validator {
  static hasLessThanMin(array, min) {
    return array.length < min;
  }

  static isOverMaxLength(array, maxLength) {
    for (let el of array) {
      return el.length > maxLength;
    }
  }

  static hasEmptyStr(array) {
    return array.includes('');
  }

  static isDuplicated(array) {
    return array.length !== new Set(array).size;
  }
}
