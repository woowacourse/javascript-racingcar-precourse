export default function toggleRaceNumberInputScreen() {
  const $inputRaceNumberScreen = document.querySelector(
    '.car-game-container > div:last-child',
  );

  if ($inputRaceNumberScreen.style.display === 'none') {
    $inputRaceNumberScreen.style.display = 'inline';
    return;
  }
  $inputRaceNumberScreen.style.display = 'none';
}
