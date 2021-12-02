const validateCarInput = function validateCarInputValue(value) {
  if (value.length === 0) return false;
  const array = value.split(",");
  return array.every((e) => e.length <= 5 && e.length > 0);
};

export default validateCarInput;
