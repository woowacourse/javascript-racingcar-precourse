// Constants
export const CAR_NAMES_LENGTH_MIN = 1;
export const CAR_NAMES_LENGTH_MAX = 5;
export const RACING_COUNT_RANGE_MIN = 1;
export const RACING_COUNT_RANGE_MAX = 255;
export const RANDOM_NUMBER_RANGE_MIN = 0;
export const RANDOM_NUMBER_RANGE_MAX = 9;
export const PROCEED_THRESHOLD = 4;

// Strings
export const FINAL_WINNER_TITLE = '최종 우승자';

// Error Messages
export const ERROR_WRONG_CAR_NAMES = `각 자동차는 서로 다른 ${CAR_NAMES_LENGTH_MIN} 이상 ${CAR_NAMES_LENGTH_MAX}자 이하의 이름만 가능합니다.`;
export const ERROR_WRONG_RACING_COUNT = `${RACING_COUNT_RANGE_MIN} 이상 ${RACING_COUNT_RANGE_MAX} 이하의 정수를 입력해주세요.`;
