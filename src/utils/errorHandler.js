import { CAR_NAME_MAX_LENGTH, RACING_COUNT_RANGE } from '../constants/index.js';

export const INPUT_CAR_NAMES_BAD_LENGTH = 'INPUT_CAR_NAMES_BAD_LENGTH';
export const INPUT_CAR_NAMES_HAS_DUPLICATES = 'INPUT_CAR_NAMES_HAS_DUPLICATES';
export const INPUT_RACING_COUNT_VALID_NUMBER =
  'INPUT_RACING_COUNT_VALID_NUMBER';

const DEFAULT_ERROR_MESSAGE = '알 수 없는 오류가 발생했습니다.';

const errorMessagesRecord = {
  [INPUT_CAR_NAMES_BAD_LENGTH]: `자동차 이름은 ${CAR_NAME_MAX_LENGTH}자 이하로 입력해야 합니다.`,
  [INPUT_CAR_NAMES_HAS_DUPLICATES]: '중복된 자동차 이름이 존재합니다.',
  [INPUT_RACING_COUNT_VALID_NUMBER]: `시도할 횟수는 ${RACING_COUNT_RANGE.min} ~ ${RACING_COUNT_RANGE.max}회여야 합니다.`,
};

export const handleError = (errorType) => {
  const errorMessage = errorMessagesRecord[errorType] || DEFAULT_ERROR_MESSAGE;

  // eslint-disable-next-line no-alert
  window.alert(errorMessage);
};
