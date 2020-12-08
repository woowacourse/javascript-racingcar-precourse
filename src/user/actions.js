const isNull = function (value) {
  if (value === '') {
    return true;
  }
};

const isOverFive = function (value) {
  if (value.length > 5) {
    return true;
  }
};

const isZero = function (value) {
  if (value === 0) {
    return true;
  }
};

const isAlone = function (value) {
  if (value.length === 1) {
    return true;
  }
};

const isDuplication = function (_carNames) {
  for (let i = 0; i < _carNames.length; i++) {
    const carName = _carNames[i];

    if (_carNames.indexOf(carName) !== i) {
      return true;
    }
  }
};

const isVaild = function (_carNames) {
  if (isAlone(_carNames)) {
    alert('1개 이상의 자동차 이름을 입력해주세요.');
    return;
  }

  for (let i = 0; i < _carNames.length; i++) {
    const carName = _carNames[i];

    if (isNull(carName)) {
      alert(`자동차 이름은 공백일 수 없습니다. "${i + 1}번째 자동차"`);
      return;
    } else if (isOverFive(carName)) {
      alert(`자동차 이름을 5자 이하로 지어주세요. "${carName}"`);
      return;
    }
  }

  if (isDuplication(_carNames)) {
    alert('자동차 이름은 중복일 수 없습니다.');
    return;
  }

  return true;
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

const getCarNames = function () {
  const rawCarNames = getRawCarNames();

  if (!rawCarNames) {
    return;
  }

  const carNames = formatSrtingToArray(rawCarNames);

  if (isVaild(carNames)) {
    return carNames;
  }
};

const getRacingCount = function () {
  const racingCount = document.getElementById('racing-count-input').value;

  if (isNull(racingCount)) {
    alert('시도할 횟수를 입력해주세요.');
    return;
  } else if (isZero(racingCount)) {
    alert('0보다 큰 수를 입력해주세요.');
    return;
  }

  return racingCount;
};

export { getCarNames, getRacingCount };
