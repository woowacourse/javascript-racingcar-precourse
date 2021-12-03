import { extractNames, isCarEnough, isNameTooLong } from './getNameInput.js';

export default function play() {
  const nameSubmitButton = document.getElementById('car-names-submit');
  const players = [];
  let carNames = [];
  let trial = 0;

  function getNameInput() {
    const nameEntered = document.getElementById('car-names-input').value;
    if (isCarEnough(nameEntered)) {
      carNames = extractNames(nameEntered);
    }
    isNameTooLong(carNames);
  }

  nameSubmitButton.addEventListener('click', getNameInput);

  makePlayers();
  function makePlayers() {
    for (let i = 0; i < carNames.length; i++) {
      const player = new Car(carNames[i], 0);
      players.push(player);
    }
  }
}

new play();
