const PREFIX = '[ERROR] ';

class ValidationError extends Error {
  constructor(message) {
    super(message);

    this.prefix = PREFIX;
  }
}

module.exports = ValidationError;
