export default function toggleRaceNumberInputScreen() {
  const $inputRaceNumberScreen = document.querySelector(
    '.car-game-container > div:last-child',
  );

  $inputRaceNumberScreen.style.display = 'none';
}
