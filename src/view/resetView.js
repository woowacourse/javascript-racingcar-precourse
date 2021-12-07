import { $ } from "../common/const.js";

function initView() {
  const $app = document.getElementById("app");
  const $resultDiv = document.createElement("div");

  $resultDiv.id = "result-div";
  $app.appendChild($resultDiv);
}

export default function resetView() {
  const $app = $("app");
  const $resultDiv = $("result-div");

  if ($resultDiv) {
    $app.removeChild($resultDiv);
  }
  initView();
}
