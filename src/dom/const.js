export const ID_APP = 'app';

const ID_PREFIX_CAR_NAMES = 'car-names';
const ID_PREFIX_RACING_COUNT = 'racing-count';

const ID_SUFFIX = {
  form: 'form',
  input: 'input',
  button: 'submit',
};

const getFormId = (prefix) =>
  Object.keys(ID_SUFFIX).reduce(
    (acc, cur) => ({
      ...acc,
      [`${cur}Id`]: `${prefix}-${ID_SUFFIX[cur]}`,
    }),
    {}
  );

export const ID_CAR_NAMES = getFormId(ID_PREFIX_CAR_NAMES);
export const ID_RACING_COUNT = getFormId(ID_PREFIX_RACING_COUNT);

export const TYPE_CAR_NAMES = {
  inputType: 'text',
  buttonType: 'submit',
};

export const TYPE_RACING_COUNT = {
  inputType: 'number',
  buttonType: 'submit',
};

export const BUTTON_SUBMIT_TEXT = '확인';
export const HEADING_RACING_COUNT = '시도할 횟수를 입력해주세요.';
export const HEADING_RESULT = '📄 실행 결과';

export const ID_RACING_WINNERS = 'racing-winners';

export const ACTION_CHECK_CAR_NAMES = 'checkCarNames';
export const ACTION_CHECK_RACING_COUNT = 'checkRacingCount';

export const MSG_ERROR = '잘못된 입력입니다';

export const CAR_POSITION = '-';
export const TEXT_WINNERS = '최종 우승자';
