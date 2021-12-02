export const GAME = {
  MAX_CAR_NAME_LENGTH: 5,
  MIN_CAR_NAME_LENGTH: 1,
  MIN_INPUT_COUNT: 1,
  MIN_SCORE: 0,
  MAX_SCORE: 9,
};

export const ERR_MESSAGE = {
  NAME_TOO_LONG: `이름은 ${GAME.MAX_CAR_NAME_LENGTH}글자 이하로 입력해 주세요.`,
  NAME_CANNOT_BE_BLANK: '공백만으로는 이름을 구성할 수 없습니다.',
  COUNT_TOO_SMALL: `${GAME.MIN_INPUT_COUNT} 이상의 숫자를 입력해주세요.`,
};
