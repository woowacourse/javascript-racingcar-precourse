import { CHARACTER } from './constant.js';
import isEnoughAccel from './isEnoughAccel.js';

export default class Car {
    constructor(name) {
        this.name = name;
        this.track = [];
    }

    go() {
        this.track.push(CHARACTER.tyreTracks);
        return this;
    }

    goIfEnoughAccel() {
        if (isEnoughAccel()) {
            this.go();
        }

        return this;
    }

    getTrackSize() {
        return this.track.length;
    }

    isWinner(winnerTrackSize) {
        return this.getTrackSize() === winnerTrackSize;
    }

    getName() {
        return this.name;
    }

    getTrackLog() {
        return this.track.join('');
    }
}
