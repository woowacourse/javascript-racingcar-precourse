import validate from "./validate.js";
import { $ } from "../common/const.js";
import Validation from "./validate.js";

export default function getInputCarNames() {
  const $carNamesInput = $("car-names-input");
  const carNamesInputArray = $carNamesInput?.value?.split(",");

  const validation = new Validation();
  if (validation.setCarNames(carNamesInputArray)) {
    return carNamesInputArray;
  } else {
    return "";
  }
}
