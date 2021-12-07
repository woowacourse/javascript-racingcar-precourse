const GAME_RULE = Object.freeze({
  MIN_RANGE_NUMBER: 0,
  MAX_RANGE_NUMBER: 9,
  MOVE_CONDITION_NUMBER: 4,
  MAX_CAR_NAME_LENGTH: 5,
  CAR_DISTANCE_LOG: '-',
});

const CAR_NAMES = Object.freeze({
  EMPTY_ERROR_MESSAGE: '자동차 이름을 입력해주세요.  올바른 예) east,west,south,north',
  BLANK_ERROR_MESSAGE: '자동차 이름을 공백없이 입력해주세요.  올바른 예) east,west,south,north',
  LENGTH_ERROR_MEESSAGE:
    ' 자동차 이름은 5자 이하로 입력해주세요.  올바른 예) east,west,south,north',
  DUPLICATE_ERROR_MESSSAGE:
    '자동차 이름은 중복 없이 입력해주세요.  올바른 예) east,west,south,north',
});

const RACING_COUNT = Object.freeze({
  EMPTY_ERROR_MESSAGE: '시도할 횟수를 입력해주세요.  올바른 예) 5',
  TYPE_ERROR_MESSAGE: '시도할 횟수는 1 이상의 자연수로 입력해주세요.  올바른 예) 5',
  RANGE_ERROR_MESSAGE: '시도할 횟수는 1 이상의 자연수로 입력해주세요.  올바른 예) 5',
});

export { GAME_RULE, CAR_NAMES, RACING_COUNT };
