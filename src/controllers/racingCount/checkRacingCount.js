const isValidRacingCount = racingCountStr => {
  let check = true;

  if (racingCountStr === "") {
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
