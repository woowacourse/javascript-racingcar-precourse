const getCarInput = (game) => {};

const getCountInput = (game) => {};

export const eventHandler = (game) => {
  document.getElementById("car-names-submit").addEventListener("click", () => {
    getCarInput(game);
  });

  document
    .getElementById("racing-count-submit")
    .addEventListener("click", () => {
      getCountInput(game);
    });
};
