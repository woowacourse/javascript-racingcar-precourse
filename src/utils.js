function isValidcarNameLength(name) {
  return 0 < name.length && name.length < 6;
}
function carNamesCheck(names) {
  if (!names.every(isValidcarNameLength)) {
    return false;
  }
  return true;
}
export { carNamesCheck };
