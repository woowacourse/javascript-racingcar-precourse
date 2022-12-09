const ValidationError = require('../../error/Error');
const { ERROR } = require('../../utils/constants');

const CARNAME = Object.freeze({
  min: 1,
  max: 5,
});

const LEAST_CAR_COUNT = 2;

const CarsValidation = {
  split(input) {
    return input.split(',');
  },

  isValidName(input) {
    return input.length <= CARNAME.max && input.length >= CARNAME.min;
  },

  canPlay(input) {
    return this.split(input).length >= LEAST_CAR_COUNT;
  },

  isCorrectName(input) {
    this.split(input).forEach((name) => {
      if (!this.isValidName(name)) throw new ValidationError(ERROR.name);
    });
  },

  isDuplicate(input) {
    return new Set(this.split(input)).size === this.split(input);
  },

  validate(input) {
    this.isCorrectName(input);
    if (!this.canPlay(input)) throw new ValidationError(ERROR.least_count);
    if (!this.isDuplicate(input)) throw new ValidationError(ERROR.duplicate);
  },
};

module.exports = CarsValidation;
