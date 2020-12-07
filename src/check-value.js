export default class CheckValue {
    constructor(carNamesArr) {
        this.carNamesArr = carNamesArr;
    }
    isEmpty() {
        let result = false;
        if(this.carNamesArr === "" || this.carNamesArr === null || this.carNamesArr === undefined
            || (this.carNamesArr !== null && typeof this.carNamesArr === "object"
            && !Object.keys(this.carNamesArr).length)) {
            result = true;
        }
        console.log(result);
        return result;
    } 
}