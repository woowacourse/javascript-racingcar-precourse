import { $racingCountInput, $racingCountText, $resultText, $racingCountSubmit } from "../constants/constants.js";

export const initDOM = () => {
  $racingCountText.style.display = "none";
  $racingCountInput.style.display = "none";
  $racingCountSubmit.style.display = "none";
  $resultText.style.display = "none";
}

export const showNextDOM = () => {
  $racingCountText.style.display = "block";
  $racingCountInput.style.display = "inline";
  $racingCountSubmit.style.display = "inline";
}

export const showResultText = () => {
  $resultText.style.display = "block";
}