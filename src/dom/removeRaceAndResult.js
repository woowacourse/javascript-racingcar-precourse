function removeRace() {
  const $raceElements = document.getElementsByClassName('race-element');

  while ($raceElements.length) {
    const $parentNode = $raceElements[0].parentNode;
    $parentNode.removeChild($raceElements[0]);
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
