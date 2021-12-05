import { $ } from '../dom.js';

function checkInputCarEmpty(carNames) {
  if (carNames.length === 0) {
    return true;
  }
  return false;
}
function divideInputCarNames(carNames) {
  if (carNames.includes(',')) {
    return carNames.split(',');
  }
  return [carNames];
}
function testInputCarNamesValidity(carNames) {
  carNames.forEach(element => {
    if (element.length > 5 || element.length<=0) {
      alert('차의 이름은 1자 이상 5자 이하여야 합니다.');
      return false;
    }
  });
  const carNamesSet = new Set(carNames);
  if (carNamesSet.length !== carNames.size) {
    alert('차의 이름은 중복되지 않아야 합니다.');
    return false;
  }
  return true;
}
export default function InputCars() {
  const carNames = $('#car-names-input').value;
  if (checkInputCarEmpty(carNames)) {
    alert('차의 이름을 입력해주세요.');
    return false;
  }
  const carNameList = divideInputCarNames(carNames);
  if (!testInputCarNamesValidity(carNameList)) {
    $('#car-names-input').value = '';
    return false;
  }
  return carNameList;
}