export default class Component {
  constructor() {}

  gamePlay() {}

  duplicateInputBan(targetInput, targetBtn) {
    targetInput.setAttribute("disabled", "");
    targetBtn.classList.add("js-hidden__btn");
  }
}
