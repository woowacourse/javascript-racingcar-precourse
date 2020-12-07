export default class RacingResult {
  constructor({ $target }) {
    this.$container = document.createElement("div");
    $target.append(this.$container);

    this.init();
  }

  init = () => {
    const HTMLString = "<h4>📄 실행 결과</h4>";

    this.$container.insertAdjacentHTML("afterbegin", HTMLString);
  };
}
