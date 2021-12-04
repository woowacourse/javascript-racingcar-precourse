import { CarNameInput } from "./car-names-input.js";
import { hideNode, showNode, createResultNode, disableForm } from "../utils/dom.js";
import { SELECTOR } from "../constants/constant.js";
import { Car } from "../model/car.js";
import { RacingCount } from "./racing-count.js";
import { selectWinners } from "../utils/car-utils.js";

export class RacingCarGame {
    constructor($target) {
        this.$target = $target;
        this.$carNamesForm = document.getElementById(SELECTOR.ID.CAR_NAMES_FORM);
        this.$racingCount = document.getElementById(SELECTOR.ID.RACING_COUNT_FORM);
        this.$racingCountCommand = document.getElementById(SELECTOR.ID.RACING_COUNT_COMMAND);
        this.$result = document.getElementById(SELECTOR.ID.RESULT);
        this.state = { cars: [], count: 0, winners: [] };
        this.init();
    }
    init() {
        this.bindEventsToComponents();
        this.unmount();
    }
    bindEventsToComponents() {
        this.carNamesInput = new CarNameInput(this.setCars.bind(this));
    }
    setCars(names) {
        this.activateRacingCount();
        this.state.cars = names.map((name) => new Car(name));
        disableForm(this.$carNamesForm);
    }
    setCount(count) {
        this.state.count = count;
        this.startRacing();
    }
    unmount() {
        hideNode(this.$racingCount);
        hideNode(this.$racingCountCommand);
        hideNode(this.$result);
    }
    activateRacingCount() {
        showNode(this.$racingCountCommand);
        showNode(this.$racingCount);
        this.racingCountInput = new RacingCount(this.setCount.bind(this));
    }
    startRacing() {
        showNode(this.$result);
        while (this.state.count--) {
            this.moveCars();
        }
        showNode(this.$result);
        disableForm(this.$racingCount);
        this.state.winners = selectWinners(this.state.cars);
    }
    moveCars() {
        this.state.cars.forEach((car) => {
            car.rollDice();
            car.move();
        });
        this.printState();
    }
    printState() {
        const $resultNode = createResultNode(this.state.cars);
        this.$target.appendChild($resultNode);
    }
}
