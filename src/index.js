import validateCarName from "./input/validateCarName.js";
import {
  $carNameSubmit,
  $racingCountTitle,
  $racingCount,
  $racingCountSubmit,
  $racingResultTitle,
} from "./common/constants.js";

$racingCountTitle.style.visibility = "hidden";
$racingCount.style.visibility = "hidden";
$racingCountSubmit.style.visibility = "hidden";
$racingResultTitle.style.visibility = "hidden";

$carNameSubmit.addEventListener("click", validateCarName);
