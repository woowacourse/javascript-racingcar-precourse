const isInteger = input => {
  let check = true;

  if (isNaN(input)) {
    check = false;
  } else if (Number(input) % 1 !== 0) {
    check = false;
  }

  return check;
};

const isValidRacingCount = racingCountStr => {
  let check = true;

  if (!isInteger(racingCountStr)) {
    check = false;
  } else {
    const racingCount = parseInt(racingCountStr, 10);

    if (racingCount < 1) {
      check = false;
    }
  }

  return check;
};

export { isValidRacingCount };
