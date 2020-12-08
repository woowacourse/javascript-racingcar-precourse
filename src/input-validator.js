const RETURN_MESSAGES = {
  ERROR_NAME_LENGTH_EXCEEDED: "자동차 이름은 5자 이하로 입력해주세요!",
  ERROR_NAME_INPUT_NONE: "이름을 입력해 주세요!",
  ERROR_NAME_DUPLICATED: "이름에 중복이 있습니다!",
  ERROR_RACING_COUNT_NEGATIVE: "1 이상의 숫자를 넣어주세요!"
};

export function isValidCarName(carNames) {
  const carNameArray = carNames.split(",");
  let isValid = false;

  if (carNameArray.includes("")) {
    alert(RETURN_MESSAGES.ERROR_NAME_INPUT_NONE);
  } else if (carNameArray.length !== [...new Set(carNameArray)].length) {
    alert(RETURN_MESSAGES.ERROR_NAME_DUPLICATED);
  } else if (!carNameArray.every(name => name.length < 6)) {
    alert(RETURN_MESSAGES.ERROR_NAME_LENGTH_EXCEEDED);
  } else {
    isValid = true;
  }

  return isValid;
}

export function isValidRacingCount(racingCount) {
  let isValid = false;

  if (racingCount < 1) {
    alert(RETURN_MESSAGES.ERROR_RACING_COUNT_NEGATIVE);
  } else {
    isValid = true;

    return isValid;
  }
}
