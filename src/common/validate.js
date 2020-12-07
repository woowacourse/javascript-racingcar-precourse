const MIN_INPUT_LENGTH = 1;
const MAX_INPUT_LENGTH = 5;

export const validateInputsUnique = function (inputs) {
  const duplicateInputs = inputs.filter((input, index) => inputs.indexOf(input) !== index);

  if (duplicateInputs.length) {
    return false;
  }

  return true;
};

export const validateInputsLength = function (inputs) {
  for (let input of inputs) {
    if (input.length < MIN_INPUT_LENGTH || input.length > MAX_INPUT_LENGTH) {
      return false;
    }
  }

  return true;
};

export const validateNaturalNumber = function (number) {
  if (isNaN(number) || number < 1 || !Number.isInteger(number)) {
    return false;
  }

  return true;
};
