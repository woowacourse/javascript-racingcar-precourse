export function checkEmpty(input, valid) {
  if (input.length === 0) valid = false;
  return valid;
}

export function checkNamelength(input, valid) {
  input.forEach((name) => {
    if (name.length > 5) valid = false;
  });
  return valid;
}

export function checkNegative(input) {
  if (input <= 0) {
    return false;
  }
  return true;
}
