export class Car {
    constructor(name) {
        this.name = name;
        this.position = '';
        this.point = 0;
    }

    makeRandNumbs() {
        return MissionUtils.Random.pickNumberInRange(0, 9);
    }

    makeCarMove() {
        if (this.makeRandNumbs() > 3) return this.position += '-';
    }

    getResult() {
        return `${this.name} : ${this.position}`;
    }

    getPoint() {
        if (this.position !== '') return this.point += this.position.length;
    }
}
