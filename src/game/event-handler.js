import RacingCarGame from './racing-car-game.js';
import { CAR_NAME_ALERT_MESSAGE, COUNT_ALERT_MESSAGE } from './message.js';

export default class EventHandler {
    constructor(app) {
        this.carNameInput = document.querySelector("#car-names-input");
        this.countInput = document.querySelector("#racing-count-input");
        this.app = app;
    }

    isCorrectCarName() {
        const wrongNames = this.carNameInput.value
            .split(',')
            .filter(name => name.length > 5 || name.length < 1);
        if(!wrongNames.length) return true;
        else return false;
    }
    
    isCorrectCount() {
        return Number.isInteger(Number(this.countInput.value)) && this.countInput.value >= 1;
    }
    
    onCarNameSubmit() {
        if(!this.isCorrectCarName()) {
            this.popAlertMessage(CAR_NAME_ALERT_MESSAGE, this.carNameInput);
        }
    }
    
    onRacingCountSubmit() {
        if(this.isCorrectCount()) {
            if(this.isCorrectCarName()) {
                this.resetScreenResult();

                const carNameArray = this.carNameInput.value.split(',');
                const racingCount = Number(this.countInput.value);
                const newGame = new RacingCarGame(carNameArray, racingCount, this.app);
                newGame.gameStart();
            }
            else this.popAlertMessage(CAR_NAME_ALERT_MESSAGE, this.carNameInput);
        }
        else this.popAlertMessage(COUNT_ALERT_MESSAGE, this.countInput);
    }

    resetScreenResult() {
        const gameResult = document.querySelector('#screen-result');
        while(gameResult.nextElementSibling) {
            gameResult.nextElementSibling.remove();
        }
    }

    popAlertMessage(message, input) {
        alert(message);
        input.value = '';
        input.focus();
    }
};