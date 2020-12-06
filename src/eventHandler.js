import {
  reSetByName,
  reSetByCount,
  getCarInput,
  getCountInput,
} from "./render.js";
import { clearValue } from "./utils.js";

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
      if (game.resultString !== "") {
        clearValue(game.carList, "location");
        reSetByCount(game);
      }
      getCountInput(game);
    });
};
