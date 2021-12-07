import { $ } from "../common/const.js";
import Validation from "./validate.js";

export default function getInputRunTime() {
  const $racingCountInput = $("racing-count-input");
  let countInput = $racingCountInput.value;

  const validation = new Validation();
  if (validation.setRacingCount(countInput)) {
    return countInput;
  } else {
    return "";
  }
}
