import { $ } from '../dom/dom.js';

export default function drawResultContainer() {
  let div = document.createElement("div");
  div.id = "racing-result-container";
  $('#app').append(div);
}