const validateCarInput = function validateCarInputValue(value) {
  // no empty input
  if (value.length === 0) return false;
  const array = value.split(",");

  // name length between 1-5 chars
  return array.every((e) => e.length <= 5 && e.length > 0);
};

export default validateCarInput;
