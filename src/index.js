import { extractNames, isCarEnough, isNameTooLong } from './getNameInput.js';

export default function play() {
  const nameSubmitButton = document.getElementById('car-names-submit');
  let carNames = [];
  let trial = 0;

  function getNameInput() {
    const nameEntered = document.getElementById('car-names-input').value;
    if (isCarEnough(nameEntered)) {
      carNames = extractNames(nameEntered);
    }
    isNameTooLong(carNames);
    console.log(carNames);
  }

  nameSubmitButton.addEventListener('click', getNameInput);
}

new play();
