import { reSetByName, getCarInput, getCountInput } from "./render.js";

export const eventHandler = (game) => {
  document.getElementById("car-names-submit").addEventListener("click", () => {
    if (game.resultString !== "") {
      reSetByName(game);
    }
    game.carList = [];
    getCarInput(game);
  });

  document
    .getElementById("racing-count-submit")
    .addEventListener("click", () => {
      //   if (game.resultString !== "") {
      //     reSetByCount(game);
      //   }
      getCountInput(game);
    });
};
