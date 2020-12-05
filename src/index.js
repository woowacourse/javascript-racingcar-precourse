export default function RacingCarGame() {
  const carNameInput = document.querySelector('#car-names-input');
  const carNameSubmitBtn = document.querySelector('#car-names-submit');

  carNameSubmitBtn.addEventListener('click', () => console.log(carNameInput.value));
  carNameInput.addEventListener('keydown', e => {
    if (e.keyCode === 13) {
      console.log(carNameInput.value);
    }
  });
}

new RacingCarGame();
