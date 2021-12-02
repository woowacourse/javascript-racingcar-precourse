const validateRacingInput = function validateRacingCountInputValue(value) {
  return Number.isInteger(value) && value > 0;
};

export default validateRacingInput;
