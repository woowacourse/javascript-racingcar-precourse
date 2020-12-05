export default function RacingCarGame() {
  const carNamesInput = document.getElementById('car-names-input');
  const carNamesSubmit = document.getElementById('car-names-submit');

  const handleClickCarNamesSubmit = () => {
    const carNamesList = carNamesInput.value.split(',');
    console.log(carNamesList);
  };
  carNamesSubmit.addEventListener('click', handleClickCarNamesSubmit);
}

new RacingCarGame();
