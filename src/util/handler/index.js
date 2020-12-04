import { displayTag } from "../display/index.js";
import { countValidation, namesValidation } from "../input/index.js";

const namesButtonClick = () => {
  const namesInput = document.getElementById("car-names-input");
  const names = namesInput.value;

  const isValid = namesValidation(names, namesInput);

  if (isValid) {
    const namesButton = document.getElementById("car-names-submit");
    const countWrapper = document.getElementsByClassName(
      "race-count-wrapper"
    )[0];

    displayTag(countWrapper);
    namesButton.removeEventListener("click", namesButtonClick);
  }
};

const countButtonClick = () => {
  const countInput = document.getElementById("racing-count-input");
  const count = countInput.value;

  const isValid = countValidation(count, countInput);
};

const handler = () => {
  const namesButton = document.getElementById("car-names-submit");
  const raceCountButton = document.getElementById("racing-count-submit");

  namesButton.addEventListener("click", namesButtonClick);
  raceCountButton.addEventListener("click", countButtonClick);
};

export default handler;
