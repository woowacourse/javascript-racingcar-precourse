const carNameInput = document.querySelector('#car-names-input');
//
export default function validateCarName() {
  const carNames = carNameInput.value;
  const listValue = carNames.split(',');
  const setValid = new Set(listValue);
  if (carNames.length == 0) {
    return alert('이름을 입력해주세요');
  }
  if (carNames.length != carNames.replace(/ /g, '').length) {
    return alert('공백없이 입력해주세요');
  }
  if (!listValue.every(value => value.length <= 5)) {
    return alert('5글자 이하의 이름으로 입력해주세요');
  }
  if (listValue.length != setValid.size) {
    return alert('차 이름을 중복없이 입력해주세요');
  }
  return listValue;
}
