import { $ } from '../dom/dom.js';

function checkInputCarEmpty(carNames) {
  if (carNames.length === 0) {
    alert('차의 이름을 입력해주세요.');
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
  const carNameList = divideInputCarNames(carNames);
  carNameList.forEach(element => {
    if (element.length > 5 || element.length<=0) {
      alert('차의 이름은 1자 이상 5자 이하여야 합니다.');
      return false;
    }
  });
  const carNameSet = new Set(carNameList);
  if (carNameSet.size !== carNameList.length) {
    alert('차의 이름은 중복되지 않아야 합니다.');
    return false;
  }
  return carNameList;
}
export default function InputCars() {
  const carNames = $('#car-names-input').value;
  if (!checkInputCarEmpty(carNames)) {
    return testInputCarNamesValidity(carNames);
  }
  return false;
}