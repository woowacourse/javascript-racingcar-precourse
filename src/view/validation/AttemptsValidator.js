const ValidationError = require('../../error/Error');
const { ERROR } = require('../../utils/constants');

const AttemptsValidator = {
  isNumber(input) {
    const inputNumber = Math.floor(Number(input));

    return String(inputNumber) === input && inputNumber >= 0;
  },

  validate(input) {
    if (!AttemptsValidator.isNumber(input))
      throw new ValidationError(ERROR.attempts);
  },
};

module.exports = AttemptsValidator;
