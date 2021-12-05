import { CHARACTER } from '../asset/constant.js';

export default class RacingResult {
    constructor() {
        this.$resultContainer = document.createElement('div');
        document.getElementById('app').append(this.$resultContainer);
    }

    render(gameResult, winners) {
        this.render(gameResult);
        this.render(winners);
    }

    renderGameResult(gameResult) {
        this.$resultContainer.append(
            gameResult.reduce(
                (m, { carName, trackLogs }) =>
                    `${m}<br/><p>${carName}${CHARACTER.carIntro} ${trackLogs.join(' ')}</p>`,
                '',
            ),
        );
    }
}
