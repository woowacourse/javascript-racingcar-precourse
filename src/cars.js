import { Car } from "./car.js";

export class Cars {
    constructor(carNameArray) {
        this.carNameArray = carNameArray.split(",");
        this.carObjectArray = this.carNameArray.map(item => new Car(item));
        this.winner = [];
        this.isChecking = true;
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
        let scoreSheet = this.getCarsResult().sort((a, b) => b[1] - a[1]);
        this.index = 0;
        this.winner.push(scoreSheet[0][0]);
        while (this.isChecking) {
            this.isSame(scoreSheet, this.index);
        }
    }

    isSame(array) {
        if (this.index === array.length - 1) {
            return this.isChecking = false;
        }

        if (array[this.index][1] !== array[this.index + 1][1]) {
            return this.isChecking = false;
        }

        this.index += 1;
        this.winner.push(array[this.index + 1][0]);
    }

    makeWinnerHTML() {
        let HTMLAboutWinner = `<div> 최종우승자 : `;
        HTMLAboutWinner += `${this.winner.join(", ")}`;
        HTMLAboutWinner += `</div>`;

        return HTMLAboutWinner;
    }

    getCarsResult() {
        return this.result = this.carObjectArray.map(car => [car.name, car.position.length]);
    }

}


