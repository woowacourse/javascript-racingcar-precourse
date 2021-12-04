export const ERROR = Object.freeze({
  USERINPUT_NEED_COMMA: Symbol('자동차 이름을 콤마로 구분하여 입력해주세요.'),
  USERINPUT_LENGTH_LIMIT: Symbol('자동차 이름은 최소 1자에서 5자까지 입력할 수 있습니다.'),
  USERINPUT_UNIQUE_NAME: Symbol('중복되는 자동차 이름이 있습니다.'),
  USERINPUT_EMPTY_COUNT: Symbol('시도 횟수 입력란이 빈칸입니다.'),
  USERINPUT_COUNT_NUMBER_ONLY: Symbol('시도 횟수를 최소 1 이상의 숫자로 입력하여주세요.'),
});

export const DONE = Object.freeze({
  USERINPUT_NAME: Symbol(''),
  USERINPUT_COUNT: Symbol(''),
});

export const DISPLAY = Object.freeze({
  WINNER_TITLE: '최종 우승자: ',
  GAME_RESTART_TEXT: '게임을 재시작하시겠습니까?',
  GAME_RESTART_BUTTON: '재시작',
});

export const EMPTY_STRING = '';
