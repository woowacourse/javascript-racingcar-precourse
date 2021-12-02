import ResultComponent from './components/ResultComponent';
import { $app, $nameinputForm } from './constants/index';

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
    }
}

export default new RacingGame();
