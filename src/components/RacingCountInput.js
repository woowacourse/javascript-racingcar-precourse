import { ELEMENT_ID } from "../util/constants.js";

export default class RacingCountInput {
  constructor({ $target, isShow, updateRacingCount }) {
    this.$container = document.createElement("div");
    this.$container.className = "racing-count-input-container";
    $target.append(this.$container);

    this.isShow = isShow;
    this.updateRacingCount = updateRacingCount;

    this.bindEventListener();
  }

  bindEventListener = () => {
    this.$container.addEventListener("click", (e) => {
      if (e.target.id === ELEMENT_ID.racingCountButton) {
        this.onSubmitRacingCount();
      }
    });
  };

  isNaturalNumber = (number) => {
    return Number.isInteger(number) && number > 0 ? true : false;
  };

  onSubmitRacingCount = () => {
    const $racingCountInput = document.querySelector(`#${ELEMENT_ID.racingCountInput}`);
    const racingCount = Number($racingCountInput.value);

    if (!this.isNaturalNumber(racingCount)) {
      alert("시도할 횟수는 자연수여야 합니다.");
      $racingCountInput.value = "";

      return;
    }

    this.updateRacingCount({ nextRacingCount: racingCount });
  };

  setState = (nextIsShow) => {
    if (this.isShow !== nextIsShow) {
      this.isShow = nextIsShow;
      this.render();
    }
  };

  render = () => {
    this.$container.innerHTML = this.isShow
      ? ` <h4>시도할 횟수를 입력해주세요.</h4>
          <input id="${ELEMENT_ID.racingCountInput}" type="number" />
          <button id="${ELEMENT_ID.racingCountButton}">확인</button>`
      : "";
  };
}
