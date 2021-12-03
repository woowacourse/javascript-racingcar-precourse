import Car from './Car.js';
import { displayElements } from './common.js';
import ResultComponent from './components/ResultComponent.js';

import {
    $app,
    $countInputForm,
    $countSubmitButton,
    $nameinputForm,
    $nameSubmitButton,
    $racingCountForm,
    $racingCountFormGuide,
    $resultGuideMessage,
} from './constants/index.js';

class RacingGame {
    constructor() {
        this.input = '';
        this.tryCount = 0;
        this.carNameList = this.carList = null;
        this.resultElement = this.getResultElement();
        this.resultComponent = new ResultComponent(this.resultElement);
        $app.appendChild(this.resultElement);
        displayElements(
            false,
            $racingCountForm,
            $racingCountFormGuide,
            $resultGuideMessage
        );
        this.eventListenerRegister();
    }

    isAvailable(target) {
        if (target === undefined || target === null) return false;
        if (typeof target === 'number') return target > 0;

        for (const item of target) {
            if (item.length > 5 || item.length < 1) return false;
        }

        return true;
    }

    eventListenerRegister() {
        $nameinputForm.addEventListener('change', (ev) => {
            this.input = ev.target.value;
        });
        $nameSubmitButton.addEventListener(
            'click', this.applyCarName.bind(this)
        );
        $countInputForm.addEventListener('change', (ev) => {
            this.tryCount = ev.target.value * 1;
        });
        $countSubmitButton.addEventListener(
            'click', this.applyTryCount.bind(this)
        );
    }

    applyCarName(ev) {
        ev.preventDefault();
        this.carNameList = this.input.split(',');
        if (!this.isAvailable(this.carNameList)) {
            alert(
                '잘못된 이름입니다. 이름은 공백이거나 5글자가 넘을 수 없습니다.'
            );
            this.carNameList = null;
        } else {
            this.carList = this.carNameList.map((name) => new Car(name));
            displayElements(true, $racingCountForm, $racingCountFormGuide);
        }
    }

    applyTryCount(ev) {
        ev.preventDefault();
        if (!this.isAvailable(this.tryCount)) alert('양의 정수를 입력해주세요');
        else {
            displayElements(true, $resultGuideMessage);
            this.resultComponent.setState({
                gameHists: this.getGameHist(this.carList, this.tryCount),
                winners: this.getWinners(this.carList),
            });
        }
    }

    getResultElement() {
        const resultElement = document.createElement('div');
        resultElement.id = 'result-box';
        return resultElement;
    }

    getGameHist(carList, tryCount) {
        const gameHists = [];

        for (let cnt = 0; cnt < tryCount; cnt++) {
            carList.forEach((car) => car.tryMove());
            gameHists.push(
                carList.map((car) => ({
                    name: car.getName(),
                    move: car.getPosition(),
                }))
            );
        }
        return gameHists;
    }

    getWinners(carList) {
        let winners = [];
        let maxMove = 0;

        carList.forEach((car) => {
            if (maxMove < car.getPosition()) {
                maxMove = car.getPosition();
                winners = [car.getName()];
            } else if (maxMove === car.getPosition()) {
                winners.push(car.getName());
            }
        });
        return winners;
    }
}

export default new RacingGame();
