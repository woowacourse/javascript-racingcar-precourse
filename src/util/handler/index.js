import { namesValidation } from "../input/index.js";

const namesButtonClick = (namesInput) => {
  const names = namesInput.value;
  namesValidation(names);
};

const handler = () => {
  const namesButton = document.getElementById("car-names-submit");
  const namesInput = document.getElementById("car-names-input");

  if (namesButton) {
    namesButton.addEventListener("click", () => {
      namesButtonClick(namesInput);
    });
  }
};

export default handler;
