export default function carNameValidator(carNames) {
  if (!carNames) {
    alert('이름을 입력해주세요');
    return false;
  }

  if (carNames.every((value) => value.startsWith(' '))) {
    alert('이름은 공백으로 시작할 수 없습니다.');
    return false;
  }

  if (carNames.every((value) => value.endsWith(' '))) {
    alert('이름은 공백으로 끝날 수 없습니다.');
    return false;
  }

  if (!carNames.every((value) => value.length <= 5)) {
    alert('5글자 이하의 이름으로 입력해주세요');
    return false;
  }

  return true;
}
