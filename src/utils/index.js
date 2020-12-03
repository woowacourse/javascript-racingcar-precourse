function isFourHigher(number) {
  if (number >= 4) {
    return true;
  }
  return false;
}

function isFiveLower(names) {
  names.forEach(name => {
    if (name.length > 5) {
      return false;
    }
  });

  return true;
}

function splitNamesString(names) {
  const splitedNames = names.split(',');
  return splitedNames;
}

function compareDistance(a, b) {
  return b.moveForwardDistance - a.moveForwardDistance;
}

export { isFourHigher, splitNamesString, compareDistance, isFiveLower };
