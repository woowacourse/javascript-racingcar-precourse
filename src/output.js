import {CLASS, MESSAGE} from './constants.js';

function carStatus(car) {
    return (`${car.name}: ${MESSAGE.CAR.repeat(car.move)}`);
}

export function printStatusMessage(carList) {
    let statusMessage = document.createElement('p');
    for (const car of carList) {
        statusMessage.append(carStatus(car));
        statusMessage.append(document.createElement('br'));
    }
    CLASS.RESULTBOARD.appendChild(statusMessage);
}

export function printResultMessage(winnerList) {
    let resultMessage = document.createElement('p');
    resultMessage.append(`${MESSAGE.WINNER}: ${winnerList.join(', ')}`);
    CLASS.RESULTBOARD.appendChild(resultMessage);
}