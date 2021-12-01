export const isValidRacingCount = (racingCountStr) => {
  let check = true;

  if (racingCountStr === "") {
    check = false;
  } else {
    const racingCount = parseInt(racingCountStr, 10);

    // 횟수를 0 또는 음수 값을 입력한 경우 -> 잘못 입력으로 인식
    if (racingCount < 1) {
      check = false;
    }
  }

  return check;
};
