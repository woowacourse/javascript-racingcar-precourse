function removeRace() {
  const $raceElements = document.getElementsByClassName('race-element');

  while ($raceElements.length) {
    $raceElements[0].remove();
  }
}

function removeResult() {
  const $racingWinners = document.getElementById('racing-winners');
  if ($racingWinners) {
    $racingWinners.parentNode.removeChild($racingWinners);
  }
}

export default function removeRaceAndResult() {
  removeRace();
  removeResult();
}
