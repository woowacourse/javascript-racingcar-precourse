import {ID} from './constants.js'

export function carNamesGetter() {
    let carNamesString = new String();
    ID.CAR_NAME_BUTTON.addEventListener('click', (e) => {
        carNamesString = ID.CAR_INPUT.value;
    });
    return carNamesString;
}

export function racingCountGetter() {
    let racingCountString = new String();
    ID.RACING_COUNT_BUTTON.addEventListener('click', (e) => {
        racingCountString = ID.RACING_COUNT_INPUT.value;
    });
    return racingCountString;
}