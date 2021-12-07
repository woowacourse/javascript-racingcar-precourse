export const LIMIT_LENGTH = {
  MAX_LENGTH: 5,
  MIN_LENGTH: 0,
};

export const SELECTOR_NUMBERS = {
  CAR_NUMBER: 0,
  RACING_NUMBER: 1,
};

export const ALERT_MESSAGE = {
  LENGTH: "자동차 이름은 5글자 이내입니다.",
  SPACE: "자동차 이름을 올바르게 입력해주세요.",
  RACING_COUNT: "시도 횟수는 1이상의 숫자로 입력해주세요.",
  DEFAULT: "잘못된 입력입니다.",
};

export const $ = (seletor) => document.getElementById(seletor);
