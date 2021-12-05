// ============== [ ID 선택자 상수 ] ======================
export const ID_APP = 'app';
export const ID_RACING_RESULT = 'racing-result';
export const ID_RACING_WINNERS = 'racing-winners';
export const ID_HEADING_RACING_COUNT = 'racing-count-heading';
export const ID_HEADING_RACING_RESULT = 'racing-result-heading';

// ============== [ Form 관리용 KEY ] =====================
export const KEY_FORM_CAR_NAMES = 'carNames';
export const KEY_FORM_RACING_COUNT = 'racingCount';

// ============== [ Form을 구성하는 태그들의 ID 선택자 관련 상수 ] =============================
const ID_PREFIX_FORM_ELEMENTS_CAR_NAMES = 'car-names';
const ID_PREFIX_FORM_ELEMENTS_RACING_COUNT = 'racing-count';

const ID_PREFIX_FORM_ELEMENTS = {
  [KEY_FORM_CAR_NAMES]: ID_PREFIX_FORM_ELEMENTS_CAR_NAMES,
  [KEY_FORM_RACING_COUNT]: ID_PREFIX_FORM_ELEMENTS_RACING_COUNT,
};

const ID_SUFFIX_FORM_ELEMENTS_COMMON = {
  form: 'form',
  input: 'input',
  button: 'submit',
};

const ID_SUFFIX_FORM_ELEMENTS = {
  [KEY_FORM_CAR_NAMES]: ID_SUFFIX_FORM_ELEMENTS_COMMON,
  [KEY_FORM_RACING_COUNT]: ID_SUFFIX_FORM_ELEMENTS_COMMON,
};

const getIdOfElementsInFormByKey = (formKey) => {
  const prefix = ID_PREFIX_FORM_ELEMENTS[formKey];
  const suffix = ID_SUFFIX_FORM_ELEMENTS[formKey];

  return Object.keys(suffix).reduce(
    (acc, tag) => ({
      ...acc,
      [`${tag}Id`]: `${prefix}-${suffix[tag]}`,
    }),
    {}
  );
};

// ============== [ Form을 구성하는 태그들의 ID 선택자 딕셔너리 ] =============================
export const DICT_ID_FORM_ELEMENTS = {
  [KEY_FORM_CAR_NAMES]: getIdOfElementsInFormByKey(KEY_FORM_CAR_NAMES),
  [KEY_FORM_RACING_COUNT]: getIdOfElementsInFormByKey(KEY_FORM_RACING_COUNT),
};

// ============== [ Form을 구성하는 태그들의 type 딕셔너리 ] =============================
const TYPE_FORM_ELEMENTS_CAR_NAMES = {
  inputType: 'text',
  buttonType: 'submit',
};

const TYPE_FORM_ELEMENTS_RACING_COUNT = {
  inputType: 'number',
  buttonType: 'submit',
};

export const DICT_TYPE_FORM_ELEMENTS = {
  [KEY_FORM_CAR_NAMES]: TYPE_FORM_ELEMENTS_CAR_NAMES,
  [KEY_FORM_RACING_COUNT]: TYPE_FORM_ELEMENTS_RACING_COUNT,
};

// ======================= [ 이벤트 위임으로 관리하는 action 딕셔너리 ] =========================
export const DICT_ACTION_BUTTON_SUBMIT = {
  [KEY_FORM_CAR_NAMES]: 'checkCarNames',
  [KEY_FORM_RACING_COUNT]: 'checkRacingCount',
};

// 잘못된 사용자 입력에 대한 출력 메시지
export const MSG_ERROR = '잘못된 입력입니다';

// 경주 현황과 최종 우승자 표시할 때 사용할 플레인 텍스트
export const TEXT_CAR_POSITION = '-';
export const TEXT_RACING_WINNERS = '최종 우승자';
