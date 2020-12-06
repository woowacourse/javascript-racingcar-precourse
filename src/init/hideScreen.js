function hideRaceNumberInputScreen() {
  const $inputRaceNumberScreen = document.querySelector(
    '.car-game-container > div:last-child',
  );

  $inputRaceNumberScreen.setAttribute('hidden', true);
}

function hideResultScreen() {
  const $resultScreen = document.querySelector('#app > div:last-child');

  $resultScreen.setAttribute('hidden', true);
}

export default function hideScreen() {
  hideRaceNumberInputScreen();
  hideResultScreen();
}
