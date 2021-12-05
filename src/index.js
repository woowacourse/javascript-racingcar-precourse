import {
  $carNameSubmit,
  $racingCountTitle,
  $racingCount,
  $racingCountSubmit,
  $racingResultTitle,
} from "./common/constants.js";
import validateCarName from "./input/validateCarName.js";
import validateRacingCount from "./input/validateRacingCount.js";

$racingCountTitle.style.visibility = "hidden";
$racingCount.style.visibility = "hidden";
$racingCountSubmit.style.visibility = "hidden";
$racingResultTitle.style.visibility = "hidden";

$carNameSubmit.addEventListener("click", validateCarName);
$racingCountSubmit.addEventListener("click", validateRacingCount);
