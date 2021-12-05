import { CarNameInput } from "./car-names-input.js";
import { hideNode, showNode, createResultNode, disableForm, createWinnersNode } from "../utils/dom.js";
import { SELECTOR } from "../constants/constant.js";
import { Car } from "../model/car.js";
import { RacingGame } from "../model/racing-game.js";
import { RacingCount } from "./racing-count.js";

export class App {
    constructor($target) {
        this.$target = $target;
        this.$carNamesForm = document.getElementById(SELECTOR.ID.CAR_NAMES_FORM);
        this.$racingCount = document.getElementById(SELECTOR.ID.RACING_COUNT_FORM);
        this.$racingCountCommand = document.getElementById(SELECTOR.ID.RACING_COUNT_COMMAND);
        this.$result = document.getElementById(SELECTOR.ID.RESULT);
        this.game = new RacingGame();
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
        this.game.cars = names.map((name) => new Car(name));
        disableForm(this.$carNamesForm);
    }
    setCount(count) {
        this.game.round = count;
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
        this.$racingCountInput = new RacingCount(this.setCount.bind(this));
    }
    startRacing() {
        showNode(this.$result);
        while (this.game.round) {
            this.game.moveCars();
            this.printState();
        }
        showNode(this.$result);
        disableForm(this.$racingCount);
        this.printWinner();
    }
    printState() {
        const $resultNode = createResultNode(this.game.cars);
        this.$target.appendChild($resultNode);
    }
    printWinner() {
        const $winnerNode = createWinnersNode(this.game.winners);
        this.$target.appendChild($winnerNode);
    }
}
