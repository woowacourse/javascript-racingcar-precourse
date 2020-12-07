import { creatCars, creatRacingCount } from "./inputView.js";
import { nameButton, countButton, chooseRestartButton } from "./inputUtil.js";
import {
    removeCountHTML,
    removeResultHTML,
    addResultHTML,
    addCountHTML,
    showResultHTML,
    switchCountButton,
    switchNameButton,
    resetResultHTMl,
    resetInput
} from "./outputView.js";

export class GameStart {
    constructor() {
        this.setGame();
    }

    setGame() {
        removeCountHTML();
        removeResultHTML();
        nameButton.addEventListener("click", () => this.gameReady());
        countButton.addEventListener("click", () => this.gameStart());
    }

    gameReady() {
        try {
            this.cars = creatCars();
            addCountHTML();
            switchNameButton();
        } catch (error) {
            alert(error);
        }
    }

    gameStart() {
        try {
            this.count = creatRacingCount();
            addResultHTML();
            switchCountButton();
            this.play();
            this.renderResult();
            this.readyToRestart();
        } catch (error) {
            alert(error);
        }
    }

    play() {
        for (let round = 0; round < this.count; round++) {
            this.cars.makeCarsOneGame();
            showResultHTML(this.cars.makeHTMLAboutOneGame());
        }
    }

    renderResult() {
        this.cars.findWinner();
        showResultHTML(this.cars.makeWinnerHTML());
    }

    readyToRestart() {
        chooseRestartButton().addEventListener("click", () => {
            resetResultHTMl();
            resetInput();
            switchCountButton();
            removeCountHTML();
            switchNameButton();
        });
    }

}