const { ERROR_CODE } = require('../lib/constants/error');

class CustomError extends Error {
  constructor(message) {
    super(`${ERROR_CODE} ${message}`);
    this.name = this.constructor.name;
  }
}

module.exports = CustomError;
