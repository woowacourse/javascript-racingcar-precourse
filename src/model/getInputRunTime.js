import { $ } from "../common/const.js";
import Validation from "./validate.js";

export default function getInputRunTime() {
  const $racingCountInput = $("racing-count-input");
  const validation = new Validation();
  let countInput = $racingCountInput.value;

  if (validation.isValidateRacingCount(countInput)) {
    return countInput;
  } else {
    return "";
  }
}
