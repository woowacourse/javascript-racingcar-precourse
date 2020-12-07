import { Car } from "./car.js";
import { restartButton } from "./inputUtil.js";

export class Cars {
    constructor(carNameArray) {
        this.carNameArray = carNameArray.split(",");
        this.carObjectArray = this.carNameArray.map(item => new Car(item));
    }

    makeCarsOneGame() {
        this.carObjectArray.forEach(car => car.makeOneInningGame());
    }

    makeHTMLAboutOneGame() {
        let HTMLAboutOneGame = `<div>`;
        this.carObjectArray.forEach(car => HTMLAboutOneGame += `<div>${car.name} : ${car.position}</div>`);
        HTMLAboutOneGame += `</div><br>`;

        return HTMLAboutOneGame;
    }

    findWinner() {
        const scoreSheet = this.getCarsResult().sort((a, b) => b[1] - a[1]);
        const index = 0;

        this.winner = [];
        this.isChecking = true;
        this.winner.push(scoreSheet[0][0]);

        while (this.isChecking) {
            this.isSame(scoreSheet, index);
        }
    }

    isSame(array, index) {
        if (index === array.length - 1) {
            return this.isChecking = false;
        }

        if (array[index][1] !== array[index + 1][1]) {
            return this.isChecking = false;
        }

        this.winner.push(array[index + 1][0]);
        return this.isSame(array, index + 1)
    }

    makeWinnerHTML() {
        let HTMLAboutWinner = `<span> 최종우승자 : `;
        HTMLAboutWinner += `${this.winner.join(", ")}`;
        HTMLAboutWinner += `</span>`;
        HTMLAboutWinner += restartButton;

        return HTMLAboutWinner;
    }

    getCarsResult() {
        return this.result = this.carObjectArray.map(car => [car.name, car.position.length]);
    }

}


