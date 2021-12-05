import validateCarName from "./input/validateCarName.js";
import { $carNameSubmit } from "./common/constants.js";

$carNameSubmit.addEventListener("click", validateCarName);
