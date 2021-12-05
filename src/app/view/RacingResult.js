import { CHARACTER } from '../asset/constant.js';

export default class RacingResult {
    constructor() {
        this.$resultContainer = document.createElement('div');
        document.getElementById('app').append(this.$resultContainer);
    }

    render(gameResult, winners) {
        this.renderGameResult(gameResult);
        this.renderWinners(winners);
    }

    renderGameResult(gameResult) {
        this.$resultContainer.innerHTML += gameResult.reduce(
            (outer, carInfo) =>
                `${outer}${carInfo.reduce(
                    (inner, { carName, trackLog }) =>
                        `${inner}<span>${carName}${CHARACTER.carIntro} ${trackLog}</span><br/>`,
                    '',
                )}<br/><br/>`,
            '',
        );
    }

    renderWinners(winners) {
        this.$resultContainer.innerHTML += `최종 우승자: <span id="racing-winners">${winners.join(
            CHARACTER.carNameSplit,
        )}</span>`;
    }
}
