import { creatCars, creatRacingCount } from "./inputView.js";
import { nameButton, countButton } from "./inputUtil.js";
import { removeCountHTML, removeResultHTML, addResultHTML, addCountHTML, showResultHTML } from "./outputView.js";

export class GameStart {
    constructor() {
        this.gameReady();
    }

    gameReady() {
        removeCountHTML();
        removeResultHTML();
        nameButton.addEventListener("click", () => {
            try {
                this.cars = creatCars();
                this.readyToStartRacing();
            } catch (error) {
                alert(error);
            }
        });
    }

    readyToStartRacing() {
        addCountHTML();
        countButton.addEventListener("click", () => this.gameStart());
    }

    gameStart() {
        try {
            this.count = creatRacingCount();
            addResultHTML();
            this.play();
            this.renderResult();
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
}