const isNull = function (value) {
  if (value === '') {
    return true;
  }
};

const getRawCarNames = function () {
  const rawCarNames = document.getElementById('car-names-input').value;

  if (isNull(rawCarNames)) {
    alert('자동차 이름을 입력해주세요.');
    return;
  }

  return rawCarNames;
};

const formatSrtingToArray = function (_rawCarNames) {
  if (_rawCarNames) {
    return _rawCarNames.split(',');
  }
};

const isOverFive = function (value) {
  if (value.length > 5) {
    return true;
  }
};

const setCarNames = function () {
  const rawCarNames = getRawCarNames();
  const carNames = formatSrtingToArray(rawCarNames);

  if (!carNames) {
    return;
  }

  for (let i = 0; i < carNames.length; i++) {
    const carName = carNames[i];

    if (isNull(carName)) {
      alert(`자동차 이름은 공백일 수 없습니다. "${i + 1}번째 자동차"`);
      return;
    } else if (isOverFive(carName)) {
      alert(`자동차 이름을 5자 이하로 지어주세요. "${carName}"`);
      return;
    }
  }

  return carNames;
};

export { setCarNames };
