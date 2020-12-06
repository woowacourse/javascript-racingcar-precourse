export const Element = {
  carGameCountContainer: document.querySelector(".car-game-count-container"),
  carGameResultContainer: document.querySelector(".car-game-result-container"),
  carNamesSubmit: document.querySelector("#car-names-submit"),
  racingCountSubmit: document.querySelector("#racing-count-submit")
};

export const ElementControl = {
  hideCarGameCountContainer() {
    Element.carGameCountContainer.style.visibility = "hidden";
  },

  showCarGameCountContainer() {
    Element.carGameCountContainer.style.visibility = "visible";
  },

  hideCarGameResultContainer() {
    Element.carGameResultContainer.style.visibility = "hidden";
  },

  showCarGameResultContainer() {
    Element.carGameResultContainer.style.visibility = "visible";
  }
}