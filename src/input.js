const RETURN_MESSAGES = {
  ERROR_NAME_LENGTH_EXCEEDED: "자동차 이름은 5자 이하로 입력해주세요!",
  ERROR_NAME_INPUT_NONE: "이름을 입력해 주세요!",
  ERROR_RACING_COUNT_NEGATIVE: "1 이상의 숫자를 넣어주세요!"
};

export default function carName() {
  const carNames = document.getElementById("car-names-input").value;

  return carNames;
}

export function isValidCarName(carNames) {
  const carNameArray = carNames.split(",");
  let isValid = false;

  for (let i = 0; i < carNameArray.length; i++) {
    if (carNameArray[i].length === 0) {
      alert(RETURN_MESSAGES.ERROR_NAME_INPUT_NONE);
    } else if (carNameArray[i].length > 5) {
      alert(RETURN_MESSAGES.ERROR_NAME_LENGTH_EXCEEDED);
    } else {
      isValid = true;

      return isValid;
    }
  }
}

export function racingCount() {
  const racingCount = document.getElementById("racing-count-input").value;

  return racingCount;
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
