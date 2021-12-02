const resetRacingCountInput = () => {
  const $racingCountInput = document.getElementById("racing-count-input");

  $racingCountInput.value = "";
};

const lockRacingCountInput = () => {
  const $racingCountInput = document.getElementById("racing-count-input");

  $racingCountInput.readOnly = true;
};

export { resetRacingCountInput, lockRacingCountInput };
