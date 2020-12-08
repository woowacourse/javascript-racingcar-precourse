export class Validation {
  static isUnderFiveCharacters(instanceOfCars) {
    for (let i = 0; i < instanceOfCars.length; i += 1) {
      if (instanceOfCars[i].name.length > 5) {
        alert('다섯글자 이하의 이름을 입력해주세요.');
        document.getElementById('#car-names-input').value = '';

        return false;
      }
    }

    return true;
  }

  static hasBlanks(instanceOfCars) {
    for (let i = 0; i < instanceOfCars.length; i += 1) {
      if (instanceOfCars[i].name === null || instanceOfCars[i].name.replace(/ /g, '') === '') {
        alert('자동차의 이름은 공백이 될 수 없습니다.');
        document.getElementById('#car-names-input').value = '';

        return true;
      }
    }

    return false;
  }
}
