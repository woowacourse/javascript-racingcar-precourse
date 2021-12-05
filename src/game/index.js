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
        } else {
            alert('자동차 이름을 5자 이내로 작성해주시기 바랍니다.');
        }
    }

    moveCar(car){
        const randomNumber = MissionUtils.Random.pickNumberInRange(0,9);
        if(randomNumber >= 4){
            car.position += 1;
        }
    }

    namePosition(car){
        let name =`${car.name}:`
        let position = ''
        for(let i=0; i<car.position; i++){
            position += '-'
        }
        return name + position;
    }

    displayCurrentHTML(currentPositions){
        let racingCurrent = document.getElementById('racing-current');
        racingCurrent.innerHTML += currentPositions + "<br>";
    }

    receiveCount(input){
        for(let i=0; i<input; i++){
            for(let j=0; j<this.cars.length; j++){
                this.moveCar(this.cars[j]);
            }

            let currentPositions = ``;
            for(let j=0; j<this.cars.length; j++){
                currentPositions += this.namePosition(this.cars[j]) + "<br>";
            }

            this.displayCurrentHTML(currentPositions);
        }
    }
}