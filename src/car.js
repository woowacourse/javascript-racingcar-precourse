export class Car {
    constructor(name) {
        this.name = name;
        this.position = "";
    }

    makeRandomNumber() {
        return parseInt(Math.random() * 9);
    }

    makeOneInningGame() {
        if (this.makeRandomNumber() > 3) {
            return this.position += "-";
        }
    }

    getResult() {
        return `${this.name} : ${this.position}`;
    }

}