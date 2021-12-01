export default function RacingCarGame() {
  const init = () => {
    document.querySelector('#racing-count-title').style.display = 'none';
    document.querySelector('#racing-count-form').style.display = 'none';
    document.querySelector('#racing-result-title').style.display = 'none';
    eventListeners();
  };

  const handleCarNamesSubmit = e => {
    e.preventDefault();
    const carNames = document.querySelector('#car-names-input').value;
    console.log(carNames);
  };

  const eventListeners = () => {
    document.querySelector('#car-names-submit').onclick = handleCarNamesSubmit;
  };

  init();
}

new RacingCarGame();
