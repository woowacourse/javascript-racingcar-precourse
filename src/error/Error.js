const PREFIX = '[ERROR] ';

class ValidationError extends Error {
  constructor(message) {
    super(PREFIX + message);
  }
}

module.exports = ValidationError;
