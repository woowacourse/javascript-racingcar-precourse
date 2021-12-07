function isValidate(type, input) {
  if (type === "name") return !isOverFiveSyllable(input);
  else return isPositive(input);
}

function isOverFiveSyllable(input) {
  return input.length > 5;
}

function isPositive(input) {
  return input >= 1;
}

export default isValidate;
