export class Car {
    constructor(name) {
        this.name = name;
        this.position = "";
    };

    makeRandNumbs() {
        return MissionUtils.Random.pickNumberInRange(0, 9);
    };

    makeCarMove() {
        if (this.makeRandNumbs() > 3) return this.position += "-";
    };

    getResult() {
        return `${this.name} : ${this.position}`;
    };
};