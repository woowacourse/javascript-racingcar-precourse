import RacingCarGame from "./Components/racingCarGame.js";
import { initHTML, hideForms } from "./Manager/uiManager.js";
import { onNameSubmit, onRoundSubmit } from "./Manager/gameManager.js";

export default function main() {
  const game = new RacingCarGame();
  // 인풋 연결하기
  initHTML();

  // 횟수 입력창, 실행 결과창 숨겨두기
  hideForms();

  // 이벤트핸들러 연결하기
  document.getElementById("car-names-submit").addEventListener("click", onNameSubmit.bind(game));
  document.getElementById("racing-count-submit").addEventListener("click", onRoundSubmit.bind(game));
}
