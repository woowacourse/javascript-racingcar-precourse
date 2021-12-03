import { CarNameInput } from "./car-names-input.js";
import { hideNode } from "../utils/dom.js";
import { SELECTOR } from "../constants/constant.js";

export class RacingCarGame {
    constructor($target) {
        this.$target = $target;
        this.$racingCount = document.getElementById(SELECTOR.ID.RACING_COUNT_FROM);
        this.$racingCountCommand = document.getElementById(SELECTOR.ID.RACING_COUNT_COMMAND);
        this.$result = document.getElementById(SELECTOR.ID.RESULT);
        this.init();
    }
    init() {
        this.bindEventsToCompoents();
        this.unmount();
    }
    bindEventsToCompoents() {
        this.carNamesInput = new CarNameInput(this.setCars);
    }
    setCars(names) {}
    unmount() {
        hideNode(this.$racingCount);
        hideNode(this.$racingCountCommand);
        hideNode(this.$result);
    }
}
