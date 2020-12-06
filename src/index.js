import { createRandomNumber } from './create.js';
import { getCarNamesInput, getRacingCountInput } from './input.js';

export default function RacingCarGame() {	
  const racingCountDiv = document.querySelector("#racing-count-div");
  const resultDiv = document.querySelector("#result-div");
  racingCountDiv.style.display = 'none';
  resultDiv.style.display = 'none';

  function init() {
    createRandomNumber();
    getCarNamesInput();
    getRacingCountInput();
  }  
  
  init();
}


new RacingCarGame();