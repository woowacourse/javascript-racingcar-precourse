export const CHECKER_TYPE = {
  NOEMPTY: 'isNonEmpty',
  ALPHANUM: 'isAlphaNumber',
  NUM: 'isNumber',
  ALPHANUMCOMMA: 'isAlphaNumberComma',
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
};
