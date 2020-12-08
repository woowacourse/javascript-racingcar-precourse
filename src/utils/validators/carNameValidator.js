const isEmpty = (carNames) => {
  return carNames.some((name) => name === '');
};

export default function carNameValidator(carNames) {
  if (!carNames) {
    return alert('이름을 입력해주세요');
  }

  if (carNames.some((value) => value.startsWith(' ') || value.endsWith(' '))) {
    return alert('이름은 공백으로 시작하거나 끝날 수 없습니다.');
  }

  if (!carNames.every((value) => value.length <= 5)) {
    return alert('5글자 이하의 이름으로 입력해주세요');
  }

  if (isEmpty(carNames)) {
    return alert('한 글자 이상의 이름을 가져야합니다');
  }

  return true;
}
