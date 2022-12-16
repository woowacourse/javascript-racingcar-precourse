const PREFIX = '[ERROR]';

const ErrorHandler = {
  ERROR_MESSAGE: {
    carName: {
      length: `${PREFIX} 자동차 이름은 5자 이하로 콤마로 구분하여 입력해 주세요.`,
      character: `${PREFIX} 자동차 이름은 특수기호와 띄어쓰기 없는 문자, 숫자로 입력해 주세요.`,
    },

    tryCount: {
      naturalNumber: `${PREFIX} 시도 횟수는 자연수로 입력해 주세요.`,
    },
  },

  throwError(isInvalid, message) {
    if (isInvalid) {
      throw new Error(message);
    }
  },

  validateTryCount(tryCount) {
    const isNotNaturalNumber = !(/^\d+$/.test(tryCount) && Number(tryCount));

    ErrorHandler.throwError(isNotNaturalNumber, ErrorHandler.ERROR_MESSAGE.tryCount.naturalNumber);
  },
};

module.exports = ErrorHandler;
