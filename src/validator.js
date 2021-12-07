function isEmptyName(inputNames) {
  for (let name of inputNames) {
    if (name.replace(/ /gi, '') === '') {
      return true;
    }
  }

  return false;
}

function isBiggerThanFive(inputNames) {
  for (let name of inputNames) {
    if (name.length > 5) {
      return true;
    }
  }

  return false;
}

function isDuplicatedName(inputNames) {
  let names = new Set(inputNames);

  if (inputNames.length === names.size) {
    return false;
  }

  return true;
}

function isValidCount(inputCount) {
  if (Number.isNaN(inputCount) || Number(inputCount) > 0) {
    return true;
  }

  return false;
}

export { isEmptyName, isBiggerThanFive, isDuplicatedName, isValidCount };
