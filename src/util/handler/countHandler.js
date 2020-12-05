import { displayTag } from "../display/index.js";
import { countValidation } from "../input/index.js";
import { raceStart } from "../race/index.js";

const countButtonClick = () => {
  const countInput = document.getElementById("racing-count-input");
  const count = countInput.value;

  const isValid = countValidation(count, countInput);

  if (isValid) {
    const countButton = document.getElementById("racing-count-submit");
    const racingResult = document.getElementsByClassName("racing-result")[0];

    displayTag(racingResult);
    countButton.removeEventListener("click", countButtonClick);
    countInput.setAttribute("readonly", true);

    raceStart();
  }
};

export default countButtonClick;
