import { displayTag } from "../display/index.js";
import { namesValidation } from "../input/index.js";

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
    namesInput.setAttribute("readonly", true);
  }
};

export default namesButtonClick;
