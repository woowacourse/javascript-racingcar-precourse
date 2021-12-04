function makeRaceElement(carArray) {
  const $raceElement = document.createElement('div');
  $raceElement.setAttribute('class', 'race-element');

  carArray.forEach((car) => {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(car.raceString()));
    $raceElement.appendChild(div);
  });

  $raceElement.appendChild(document.createElement('br'));

  return $raceElement;
}

export default function printRace(carArray) {
  const $app = document.getElementById('app');
  $app.appendChild(makeRaceElement(carArray));
}
