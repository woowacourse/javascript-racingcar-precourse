import Car from "./index.js";

class CarList {
    constructor() {
        this.array = [];
    }

    push(item) {
        this.array.push(item);
    }

    init(carNameArray) {
        for(let i = 0; i<carNameArray.length; i++) {
            this.push(new Car(carNameArray[i]));
        }
    }
}

export default CarList;
