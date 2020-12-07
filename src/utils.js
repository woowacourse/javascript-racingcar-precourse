import Car from './car.js';

export default function gameBoard() {
    function gameBoard(numberOfCars, racingCount) {
        this.numberOfCars = numberOfCars;
        this.totalCount = racingCount;
        this.nowCount = 0;
    }

    function createCars(carNameList) {
        let carList = new Array();
        for (let i=0; i<this.numberOfCars; i++) {
            let car = new Car(carNameList[i]);
            carList.push(car);
        }
        this.carList = carList;
    }

    function increaseCount() {
        this.nowCount = this.nowCount + 1;
    }

    function isGameEnd() {
        return (this.totalQuarter == this.nowCount);
    }

    function playGame() {
        // call car list
        let carList = this.carList;
        // play 
        for (let i=0; i<this.numberOfCars; i++) {
            carList[i].moveCar();
        }
        // increase 'nowCount'
        increaseCount();
    }

    function endGame() {
        let winnerList = new Array(getWinner());
        printResult(winnerList);
    }

    function getWinner() {
        let carList = this.carList;
        let winnerList = new Array();
        let maxCount = 0;
        for (let i=0; i<this.numberOfCars; i++) {
            if (carList[i].move > maxCount) {
                winnerList.length = 0;
                winnerList.push(carlist[i].name);
                maxCount = carlist[i].move;
            }
            if (carList[i].move == maxCount) {
                winnerList.push(carlist[i].name);
            }
        }
        return winnerList;
    }

}