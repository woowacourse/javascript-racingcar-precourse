export const MAX_SIZE = 5;

export const CHECKER_TYPE = {
  NOEMPTY: 'isNonEmpty',
  ALPHANUM: 'isAlphaNumber',
  NUM: 'isNumber',
  ALPHANUMCOMMA: 'isAlphaNumberComma',
  MAXSIZELIMIT: 'maxSizeLimit',
  NODUPLICATE: 'isNonDuplicate',
};

export const checkers = {
  isNonEmpty: {
    type: CHECKER_TYPE.NOEMPTY,
    validate: value => value !== '',
    message: '값을 입력해주세요.',
  },

  isNumber: {
    type: CHECKER_TYPE.NUM,
    validate: value => !Number.isNaN(value),
    message: '숫자만 입력해주세요.',
  },

  isAlphaNumber: {
    type: CHECKER_TYPE.ALPHANUM,
    validate: value => /^[a-zA-Z0-9]+$/.test(value),
    message: '영문자와 숫자만 입력해주세요.',
  },

  isAlphaNumberComma: {
    type: CHECKER_TYPE.ALPHANUMCOMMA,
    validate: value => /^[a-zA-Z0-9,]+$/.test(value),
    message: '영문자와 숫자, 콤마(,)만 입력해주세요.',
  },

  maxSizeLimit: {
    type: CHECKER_TYPE.MAXSIZELIMIT,
    validate: value => value.length <= MAX_SIZE,
    message: `자동차 이름을 ${MAX_SIZE}자 이하로 입력해주세요`,
  },

  isNonDuplicate: {
    type: CHECKER_TYPE.isNonDuplicate,
    validate: value => value.length === new Set(value).size,
    message: '중복된 이름이 있습니다.',
  },
};
