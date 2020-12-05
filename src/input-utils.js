const RETURN_MESSAGES = {
  ERROR_NAME_LENGTH_EXCEEDED: "자동차 이름은 5자 이하로 입력해주세요!",
  ERROR_NAME_INPUT_NONE: "이름을 입력해 주세요!",
  ERROR_RACING_COUNT_NEGATIVE: "1 이상의 숫자를 넣어주세요!",
};

export default function getUserInputValue(elementId) {
  const inputValue = document.getElementById(elementId).value;

  return inputValue;
}
