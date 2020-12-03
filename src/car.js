export class Car {
    constructor(name) {
        this.STOP_LIMIT_NUMBER = 3;
        this.NUMBER_BOUNDARY = 9;
        this.name = name;
        this.position = "";
    }

    makeRandomNumber() {
        return parseInt(Math.random() * this.NUMBER_BOUNDARY);
    }

    makeOneInningGame() {
        if (this.makeRandomNumber() > this.STOP_LIMIT_NUMBER) {
            return this.position += "-";
        }
    }

    getResult() {
        return `${this.name} : ${this.position}`;
    }

}