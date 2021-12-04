import Car from './car.js'

export default class CarGame {

    constructor(){
        this.cars = [];
    }

    isValid(inputArray){
        for(let i=0; i<inputArray.length; i++){
            if(inputArray[i].length > 5){
                return false;
            }
        }

        return true;
    }

    receiveName(input){
        let inputArray = input.split(',');
        if(this.isValid(inputArray)){
            for(let i=0; i<inputArray.length; i++){
                this.cars.push(new Car(inputArray[i]));
            }

            // TODO: check car instances, delete after new feature
            for(let i=0; i<this.cars.length; i++){
                console.log(this.cars[i].name);
            }
        } else {
            alert('자동차 이름을 5자 이내로 작성해주시기 바랍니다.');
        }
    }
}