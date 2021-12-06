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

    findWinner(cars){
        let max = 0;
        let winners = [];

        for(let i=0; i<cars.length; i++){
            if(cars[i].position > max){
                max = cars[i].position;
                winners = [cars[i].name];
            } else if( cars[i].position == max){
                winners.push(cars[i].name);
            }
        }

        return winners;
    }

    displayWinnerHTML(winners){
        const racingWinners = document.getElementById('racing-winners');
        const preWinnerText = document.createElement('span');
        preWinnerText.innerHTML = '최종 우승자: '
        
        racingWinners.before(preWinnerText);

        let winnersText = ''; 
        for(let i=0; i<winners.length; i++){
            winnersText += `${winners[i]}, `;
        }
        
        winnersText = winnersText.slice(0,-2);
        racingWinners.innerHTML = winnersText;
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

        this.displayWinnerHTML(this.findWinner(this.cars));
    }
}