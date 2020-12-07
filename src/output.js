import {CLASS, MESSAGE} from './constants';

function carStatus(car) {
    return (`${car.name}: ${MESSAGE.CAR.repeat(car.move)}`);
}

export function printStatusMessage(carList) {
    let statusMessage = document.createElement('p');
    for (let i=0; i<carList.length; i++) {
        statusMessage.append(carStatus(carList[i]));
        statusMessage.append(document.createElement('br'));
    }
    CLASS.GAMEBOARD.appendChild(statusMessage);
}

export function printResultMessage(winnerList) {
    let resultMessage = document.createElement('p');
    resultMessage.append(winnerList.join(', '));
    CLASS.GAMEBOARD.appendChild(resultMessage);
}