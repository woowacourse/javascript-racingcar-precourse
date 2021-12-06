import RacingCarGame from './racing-car-game.js';

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
            alert("잘못된 입력 형식입니다. 쉼표로 구분하여 각각 5자 이하로 입력해주세요.");
            this.carNameInput.value = '';
            this.carNameInput.focus();
        }
    }
    
    onRacingCountSubmit() {
        if(this.isCorrectCount()) {
            if(!this.isCorrectCarName()) {
                alert("자동차 이름을 형식에 맞춰 입력해 주세요.");
                this.carNameInput.value = '';
                this.carNameInput.focus();
            }
            else {
                const carNameArray = this.carNameInput.value.split(',');
                const racingCount = Number(this.countInput.value);
                const newGame = new RacingCarGame(carNameArray, racingCount, this.app);
                newGame.gameStart();
            }
        }
        else {
            alert("잘못된 입력 형식입니다. 1 이상의 정수를 입력해주세요.");
            this.countInput.value = '';
            this.countInput.focus();
        }
    }
};