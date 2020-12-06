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

function isNumber(count) {
  return /[0-9]/g.test(count);
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

export { isHigherThan, isLongerThan, isNames, isNumber };
