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
  NUMBER_OF_CAR: '자동차는 2대 이상이어야 합니다.',
  DUPLICATE_CAR_NAME: '중복되는 자동차 이름이 있습니다.',
  LENGTH_OF_CAR_NAME: '자동차 이름은 1자 이상, 5자 이하만 가능합니다.',
  WHITESPACE_IN_CAR_NAME: '자동차 이름에는 공백이 포함될 수 없습니다.',

  MIN_OF_RACING_COUNT: '레이싱 횟수는 1번 이상이어야 합니다.',
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
  ERROR_MESSAGE,
};
