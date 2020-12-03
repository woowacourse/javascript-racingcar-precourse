export class Car {
    constructor(name) {
        this.name = name;
        this.position = "";
    }

    makeRandomNumber() {
        return (Math.random() * 9)
    }

    makeOneInningGame() {
        if (this.makeRandomNumber() > 3) {
            return this.position += "-"
        }
    }

}