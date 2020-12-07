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
        // play 
        
        // increase 'nowCount'
        increaseCount();
    }

    function endGame() {
        let winnerList = new Array(getWinner());
        printResult(winnerList);
    }

    function getWinner() {

    }

}