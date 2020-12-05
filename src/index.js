export default function RacingCarGame() {
  const carNamesSubmitBtn = document.querySelector("#car-names-submit");
  const carNamesInput = document.querySelector("#car-names-input");
  const racingCountInput = document.querySelector("#racing-count-input");
  const racingCountSubmitBtn = document.querySelector("#racing-count-submit");

  const gameStart = () => {
    console.log("game start!");
  };

  const setRaceRound = () => {
    console.log("set round");
  };

  const init = () => {
    carNamesSubmitBtn.addEventListener("click", () => gameStart());
    racingCountSubmitBtn.addEventListener("click", () => setRaceRound());
    carNamesInput.addEventListener("keyup", event => {
      if (event.keyCode === 13) {
        gameStart();
      }
    });
    racingCountInput.addEventListener("keyup", event => {
      if (event.keyCode === 13) {
        setRaceRound();
      }
    });
  };

  init();
}

new RacingCarGame();
