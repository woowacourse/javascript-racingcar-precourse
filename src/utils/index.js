function isLongerThan(names, comparison) {
  for (let i = 0; i < names.length; i++) {
    if (names[i].length > comparison) {
      return true;
    }
  }

  return false;
}

function isHigherThan(number, comparison) {
  return number > comparison;
}

function isZero(count) {
  if (count === '0') {
    return true;
  }

  return false;
}

function isNumber(count) {
  if (count === '') {
    return false;
  }
  return true;
}

function isNames(names) {
  if (names[0] === '') {
    return false;
  }

  for (let i = 0; i < names.length; i++) {
    let name = Array.from(new Set(names[i]));
    if ((name.length === 1 && name[0] === ' ') || name.length === 0) {
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
  isHigherThan,
  splitNamesString,
  compareDistance,
  isLongerThan,
  isNames,
  isZero,
  isNumber,
};
