export const validateInputsUnique = function (inputs) {
  const duplicateInputs = inputs.filter((input, index) => inputs.indexOf(input) !== index);

  if (duplicateInputs.length) {
    return false;
  }

  return true;
};

export const validateInputsLength = function (inputs) {
  for (let input of inputs) {
    if (input.length < 1 || input.length > 5) {
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
