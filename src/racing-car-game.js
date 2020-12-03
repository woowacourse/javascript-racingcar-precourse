import SaveCarNames from "./save-car-names.js";

export default class RacingCarGame {
    constructor() {
        this.saveCarNames = new SaveCarNames();
        this.addClickEventListener();
    }
    // 버튼에 클릭 이벤트 리스너를 추가하는 함수
    addClickEventListener() {
        const carNamesSubmit = document.getElementById('car-names-submit');
        const racingCountSubmit = document.getElementById('racing-count-submit');
        carNamesSubmit.addEventListener('click', this.saveCarNames.getCarName);
    }
}

new RacingCarGame();
