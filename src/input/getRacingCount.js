function checkValidRacingCount(value) {
  if (Math.sign(value) === 1) {
    return true;
  }
  return false;
}

export default function getRacingCount() {
  const $racingCountSubmit = document.querySelector('#racing-count-submit');
  $racingCountSubmit.addEventListener('click', checkValidRacingCount);
}
