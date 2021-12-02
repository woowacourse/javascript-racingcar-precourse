function isEmptyName(inputNames) {
  for (let name of inputNames) {
    if (name.replace(/ /gi, '') === '') {
      return true;
    }
  }

  return false;
}

function isFiveOver(inputNames) {
  for (let name of inputNames) {
    if (name.length > 5) {
      return true;
    }
  }

  return false;
}

function isDuplication(inputNames) {
  let names = new Set(inputNames);

  if (inputNames.length === names.size) {
    return false;
  }

  return true;
}

export { isEmptyName, isFiveOver, isDuplication };
