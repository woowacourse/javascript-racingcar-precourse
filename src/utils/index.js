function isFourHigher(number) {
  if (number >= 4) {
    return true;
  }
  return false;
}

function splitNamesString(names) {
  const splitedNames = names.split(',');
  return splitedNames;
}

function compareDistance(a, b) {
  return a.moveForwardDistance - b.moveForwardDistance;
}

export { isFourHigher, splitNamesString, compareDistance };
