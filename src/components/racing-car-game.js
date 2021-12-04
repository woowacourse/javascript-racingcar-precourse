import { CarNameInput } from "./car-names-input.js";
import { hideNode, showNode } from "../utils/dom.js";
import { SELECTOR } from "../constants/constant.js";
import { Car } from "../model/car.js";

export class RacingCarGame {
    constructor($target) {
        this.$target = $target;
        this.$racingCount = document.getElementById(SELECTOR.ID.RACING_COUNT_FROM);
        this.$racingCountCommand = document.getElementById(SELECTOR.ID.RACING_COUNT_COMMAND);
        this.$result = document.getElementById(SELECTOR.ID.RESULT);
        this.state = { cars: [], count: 0 };
        this.init();
    }
    init() {
        this.bindEventsToCompoents();
        this.unmount();
    }
    bindEventsToCompoents() {
        this.carNamesInput = new CarNameInput(this.setCars.bind(this));
    }
    setCars(names) {
        this.activateRacingCount();
        this.state.cars = names.map((name) => new Car(name));
    }
    unmount() {
        hideNode(this.$racingCount);
        hideNode(this.$racingCountCommand);
        hideNode(this.$result);
    }
    activateRacingCount() {
        showNode(this.$racingCountCommand);
        showNode(this.$racingCount);
    }
}
