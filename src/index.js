import handler from "./util/handler/index.js";

export default function RacingCarGame() {
  const app = document.getElementById("app");

  if (app) {
    handler();
  }
}

new RacingCarGame();
