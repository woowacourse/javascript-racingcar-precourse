import Car from './Car';
import ResultComponent from './components/ResultComponent';
import {
    $app,
    $countInputForm,
    $countSubmitButton,
    $nameinputForm,
    $nameSubmitButton,
} from './constants/index';

class RacingGame {
    constructor() {
        this.input = '';
        this.tryCount = 0;

        this.carNameList = null;
        this.carList = null;
        this.resultElement = this.getResultElement();
        this.resultComponent = new ResultComponent(this.resultElement);

        $app.appendChild(this.resultElement);
    }

    eventListenerRegister() {
        $nameinputForm.addEventListener('change', (ev) => {
            this.input = ev.target.value;
        });
        $nameSubmitButton.addEventListener('click', this.applyCarName);
        $countInputForm.addEventListener('change', (ev) => {
            this.tryCount = ev.target.value * 1;
        });
        $countSubmitButton.addEventListener('click', this.applyTryCount);
    }

    applyCarName() {
        this.carNameList = this.input.split(',');
        if (!this.isAvailable(this.carNameList)) {
            alert(
                '잘못된 이름입니다. 이름은 공백이거나 5글자가 넘을 수 없습니다.'
            );
        } else {
            this.carList = this.carNameList.map((name) => new Car(name));
        }
    }

    applyTryCount() {
        if (!this.isAvailable(this.tryCount)) alert('양의 정수를 입력해주세요');
        else if (!this.isAvailable(this.carList))
            alert('이름을 먼저 입력해주세요');
        else {
            this.resultComponent.setState({
                gameHist: this.startGame(this.carList, this.tryCount),
                winners: this.getWinners(this.carList),
            });
        }
    }

    isAvailable(target) {
        if (typeof target === 'number') return target > 0;

        if (target.length <= 0) return false;
        if (typeof target[0] !== 'object') {
            for (const item of target) if (item.length > 5) return false;
        }

        return true;
    }

    getResultElement() {
        const resultElement = document.createElement('div');
        resultElement.id = 'result-box';
        return resultElement;
    }

    startGame(carList, tryCount) {
        const gameHists = [];

        for (let cnt = 0; cnt < tryCount; cnt++) {
            carList.forEach((car) => car.tryMove());
            gameHists.push(
                carList.map((car) => ({
                    name: car.name,
                    move: car.move,
                }))
            );
        }
        return gameHists;
    }

    getWinners(carList) {
        let winners = [];
        let maxMove = 0;

        carList.forEach((car) => {
            if (maxMove < car.move) {
                maxMove = car.move;
                winners = [maxMove];
            } else if (maxMove === car.move) {
                winners.push(car.move);
            }
        });
    }
}

export default new RacingGame();
