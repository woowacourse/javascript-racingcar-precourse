export default function RacingCarGame() {
  const init = () => {
    document.querySelector('#racing-count-title').style.display = 'none';
    document.querySelector('#racing-count-form').style.display = 'none';
    document.querySelector('#racing-result-title').style.display = 'none';
  };

  init();
}

new RacingCarGame();
