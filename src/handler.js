import { getCarNameInput, getCountInput } from "./game.js";

class handler {
  handleCarNameSubmit = () => {
    const carNameButton = document.getElementById("car-names-submit");
    carNameButton.addEventListener("click", () => {
      getCarNameInput();
    });
  };

  handleCountSubmit = () => {
    const countButton = document.getElementById("racing-count-submit");
    countButton.addEventListener("click", () => {
      getCountInput();
    });
  };
}

export const { handleCarNameSubmit, handleCountSubmit } = new handler();
