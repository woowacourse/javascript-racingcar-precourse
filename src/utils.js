function isValidcarNameLength(name) {
  return 0 < name.length && name.length < 6;
}
function carNamesCheck(names) {
  const carNameList = names.split(",");
  if (!carNameList.every(isValidcarNameLength)) {
    return false;
  }
  return true;
}

export { carNamesCheck };
