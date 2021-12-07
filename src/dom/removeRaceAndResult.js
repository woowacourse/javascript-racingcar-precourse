function removeRace() {
  const $raceElements = document.getElementsByClassName('race-element');

  while ($raceElements.length) {
    $raceElements[0].remove();
  }
}

function removeResult() {
  const $result = document.getElementById('result');
  if ($result) {
    $result.remove();
  }
}

export default function removeRaceAndResult() {
  removeRace();
  removeResult();
}
