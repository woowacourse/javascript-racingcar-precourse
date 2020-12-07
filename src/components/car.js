export class Car {

    #STOP_LIMIT_NUMBER = 3;
    #NUMBER_BOUNDARY = 9;

    constructor(name) {
        this.name = name;
        this.position = "";
    }

    makeOneInningGame() {
        if (this.makeRandomNumber() > this.#STOP_LIMIT_NUMBER) {
            return this.position += "-";
        }
    }

    makeRandomNumber() {
        return parseInt(Math.random() * this.#NUMBER_BOUNDARY);
    }

    getResult() {
        return `${this.name} : ${this.position}`;
    }
}