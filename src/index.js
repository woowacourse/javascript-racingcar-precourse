import {
  $carNameSubmit,
  $racingCountTitle,
  $racingCount,
  $racingCountSubmit,
  $racingResultTitle,
  $winner,
} from "./common/constants.js";
import validateCarName from "./input/validateCarName.js";
import validateRacingCount from "./input/validateRacingCount.js";

const initializeInput = () => {
  $racingCountTitle.style.visibility = "hidden";
  $racingCount.style.visibility = "hidden";
  $racingCountSubmit.style.visibility = "hidden";
  $racingResultTitle.style.visibility = "hidden";
  $winner.style.visibility = "hidden";
};

const start = () => {
  initializeInput();
  $carNameSubmit.addEventListener("click", validateCarName);
  $racingCountSubmit.addEventListener("click", validateRacingCount);
};

start();
