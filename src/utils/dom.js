export function setGameElemetStyle(elementStyleMessage) {
  const gameCountForm = document.getElementById("racing-count-form");
  const gameCountTitle = document.getElementById("racing-count-title");
  const gameResultTitle = document.getElementById("racing-result");
  if (elementStyleMessage === "beforeGameStart") {
    gameCountForm.style.opacity = 0;
    gameCountTitle.style.opacity = 0;
    gameResultTitle.style.opacity = 0;
  } else if (elementStyleMessage === "carsInput") {
    gameCountForm.style.opacity = 1;
    gameCountTitle.style.opacity = 1;
  } else if (elementStyleMessage === "gameCountInput") {
    gameResultTitle.style.opacity = 1;
  }
}