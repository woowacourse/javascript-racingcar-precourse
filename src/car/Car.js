class Car {
    constructor(name) {
        this.name = name;
        this.distance = 0;
    }

    getName() {
        return this.name;
    }

    moveForward() {
        this.distance++;
    }

    displayDistance() {
        let distanceMark = "";
        for (let i = 0; i < this.distance; i++) {
            distanceMark += "-";
        }
        return distanceMark;
    }
}

export default Car;
