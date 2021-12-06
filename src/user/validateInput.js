const NAME_REGULAR_EXPRESSION = '^[a-zA-Z0-9가-힣ㄱ-ㅎ]{1,5}$';
const ERROR = {
  NAME_TYPE_ERROR:
    '입력 오류: 입력을 확인해 주세요. (5자 이하, 영문, 한글, 숫자 가능)',
  COUNT_TYPE_ERROR: '자연수를 입력해 주세요.',
  DUPLICATION: '입력 오류: 자동차 이름이 중복됩니다.',
};

function checkInputDuplication(carName) {
  if (carName.length !== new Set(carName).size) {
    return false;
  }
  return true;
}

function checkInputType(carName) {
  if (!carName.match(NAME_REGULAR_EXPRESSION)) {
    return false;
  }
  return true;
}

export function getValidateNames(carNames) {
  if (!carNames.every(checkInputType)) {
    return alert(ERROR.NAME_TYPE_ERROR);
  }
  if (!checkInputDuplication(carNames)) {
    return alert(ERROR.DUPLICATION);
  }
  return true;
}

export function getValidateCount(racingCount) {
  if (racingCount > 0 && Number.isInteger(racingCount)) {
    return true;
  }
  return alert(ERROR.COUNT_TYPE_ERROR);
}
