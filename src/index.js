import { getCarNamesInput, getRacingCountInput } from "./input.js";

export default function RacingCarGame() {	
  const racingCountDiv = document.querySelector("#racing-count-div");
  const resultDiv = document.querySelector("#result-div");
  racingCountDiv.style.display = "none";
  resultDiv.style.display = "none";

  function init() {
    getCarNamesInput();
    getRacingCountInput();
  }  
  
  init();
}


new RacingCarGame();