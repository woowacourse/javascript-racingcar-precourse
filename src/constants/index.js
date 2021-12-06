// car
const MIN_OF_RANDOM = 0;
const MAX_OF_RANDOM = 9;
const MOVE_CONDITION_NUMBER = 4;

// validation
const MIN_NUMBER_OF_CARS = 2;
const MIN_LENGTH_OF_CAR_NAME = 1;
const MAX_LENGTH_OF_CAR_NAME = 5;
const MIN_OF_RACING_COUNT = 1;

const ERROR_MESSAGE = {
  NUMBER_OF_CAR: `자동차는 ${MIN_NUMBER_OF_CARS}대 이상이어야 합니다.`,
  DUPLICATE_CAR_NAME: '중복되는 자동차 이름이 있습니다.',
  LENGTH_OF_CAR_NAME: `자동차 이름은 ${MIN_LENGTH_OF_CAR_NAME}자 이상, ${MAX_LENGTH_OF_CAR_NAME}자 이하만 가능합니다.`,
  WHITESPACE_IN_CAR_NAME: '자동차 이름에는 공백이 포함될 수 없습니다.',

  RACING_COUNT_MUST_BE_INTEGER: '레이싱 횟수 입력값은 정수여야 합니다.',
  MIN_OF_RACING_COUNT: `레이싱 횟수는 ${MIN_OF_RACING_COUNT}번 이상이어야 합니다.`,
};

// input guide
const INPUT_GUIDE_MESSAGE = {
  UNVERIFIED: '확인 필요',
  VERIFIED: '확인 완료',
};

const INPUT_GUIDE_COLOR = {
  UNVERIFIED: 'red',
  VERIFIED: 'green',
};

export {
  // car
  MIN_OF_RANDOM,
  MAX_OF_RANDOM,
  MOVE_CONDITION_NUMBER,

  // validation
  MIN_NUMBER_OF_CARS,
  MIN_LENGTH_OF_CAR_NAME,
  MAX_LENGTH_OF_CAR_NAME,
  MIN_OF_RACING_COUNT,

  // error message
  ERROR_MESSAGE,

  // input guide
  INPUT_GUIDE_MESSAGE,
  INPUT_GUIDE_COLOR,
};
