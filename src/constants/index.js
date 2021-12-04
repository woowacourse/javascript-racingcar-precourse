export const ID = {
  CAR_NAMES_INPUT: 'car-names-input',
  CAR_NAMES_SUBMIT: 'car-names-submit',
  RACING_COUNT_INPUT: 'racing-count-input',
  RACING_COUNT_SUBMIT: 'racing-count-submit',
  RACING_WINNERS: 'racing-winners',
  RESULT_CONTAINER: 'result-container',
};

export const NUM = {
  MAX_NAME_LENGTH: 5,
  MIN_COUNT: 1,
  MIN_RANDOM: 0,
  MAX_RANDOM: 9,
  ADVANCE: 4,
};

export const ERROR = {
  NAME_LENGTH_IS_LONG: `${NUM.MAX_NAME_LENGTH}자를 초과한 이름이 존재합니다.`,
  NAME_IS_DUPLICATED: '중복된 이름이 존재합니다.',
  NAME_IS_EMPTY: '빈값인 이름이 존재합니다.',
  COUNT_IS_NOT_CORRECT: '시도 횟수를 올바르게 입력해주세요.',
};
