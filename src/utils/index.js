function isFourHigher(number) {
  if (number >= 4) {
    return true;
  }
  return false;
}

function isFiveUpper(names) {
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > 5) {
      return true;
    }
  }

  return false;
}

function isNames(names) {
  for (let i = 0; i < names.length; i++) {
    let name = Array.from(new Set(names[i]));
    if (name.length === 1 && name[0] === ' ') {
      return false;
    }
  }

  return true;
}

function splitNamesString(names) {
  const splitedNames = names.split(',');
  return splitedNames;
}

function compareDistance(a, b) {
  return b.moveForwardDistance - a.moveForwardDistance;
}

export {
  isFourHigher,
  splitNamesString,
  compareDistance,
  isFiveUpper,
  isNames,
};
