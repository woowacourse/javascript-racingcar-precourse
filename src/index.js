import { isValidInputNames, isValidInputCount } from "./util";
import racing from "./racing";

const carNamesSubmitBtn = document.querySelector("#car-names-submit");
const carNamesInput = document.querySelector("#car-names-input");
const racingCountContainer = document.querySelector(".racing-count-container");
const racingCountInput = document.querySelector("#racing-count-input");
const racingCountSubmitBtn = document.querySelector("#racing-count-submit");

export default function RacingCarGame() {
  let carNames;
  let racingCount;

  const gameStart = () => {
    if (isValidInputNames(carNamesInput.value)) {
      carNames = carNamesInput.value;
      racingCountContainer.style.display = "block";
    } else {
      alert(
        "자동차들의 이름을 쉼표(,)로 구분하여 각 5자 이하로 2대 이상 입력해주세요!\n예) east,west,south",
      );
      carNamesInput.value = "";
    }
  };

  const setRaceRound = () => {
    if (isValidInputCount(racingCountInput.value)) {
      racingCount = racingCountInput.value;
      racing(carNames, racingCount);
    } else {
      alert("경주 횟수를 입력해주세요!");
      racingCountInput.value = "";
    }
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
