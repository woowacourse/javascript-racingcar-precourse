import { namesValidation } from "../input/index.js";

const namesButtonClick = (namesInput) => {
  const names = namesInput.value;
  const isValid = namesValidation(names, namesInput);
};

const handler = () => {
  const namesButton = document.getElementById("car-names-submit");
  const namesInput = document.getElementById("car-names-input");

  if (namesButton) {
    namesButton.addEventListener("click", () => {
      namesButtonClick(namesInput, namesInput);
    });
  }
};

export default handler;
