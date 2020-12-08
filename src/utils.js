function isValidcarNameLength(name) {
  return 0 < name.length && name.length < 6;
}
function carNamesCheck(names) {
  if (!names.every(isValidcarNameLength)) {
    return false;
  }
  return true;
}

function isNumber(string) {
  if (!string) {
    return false;
  }
  return !isNaN(Number(string));
}

function getRandomNumber() {
  return Math.floor(Math.random() * 9);
}
function isCarMoved() {
  const randomNumber = getRandomNumber();
  return randomNumber > 3;
}
export { carNamesCheck, isNumber, isCarMoved };
