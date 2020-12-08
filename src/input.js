import Car from './car.js';
import { ERROR, TEXT, CLASS } from './constants.js';
import { setCarList, setTotalCount } from './utils.js';

function carNamesInput(nameString) {
    let nameList = nameString.split(',');
    return nameList;
}

function isCarNameValid(nameList) {
    const nameSet = new Set(nameList);

    for (let name of nameList) {
        if (name.length > 5) {
            return false;
        }
        if (name.length === 0) {
            return false;
        }
        if (nameSet.size !== nameList.length) {
            return false;
        }
    }
    return true;
}

export function countNumberOfCars(nameList) {
    return nameList.length;
}

export function createCars(carNameList) {
    let carList = new Array();
    for (let carName of carNameList) {
        let car = new Car(carName);
        carList.push(car);
    }
    return carList;
}

export function carNamesButtonEvents(game) {
    let carNameList = carNamesInput(TEXT.CAR_NAMES_INPUT.value);
    
    if (!isCarNameValid(carNameList)) {
        alert(ERROR.REWRITE);
        return;
    }

    setCarList(game, createCars(carNameList));

    CLASS.GAMEBOARD_RACING_COUNT.style.display = 'block';
}

export function racingCountButtonEvents(game) {
    setTotalCount(game, parseInt(TEXT.RACING_COUNT_INPUT.value));

    CLASS.RESULTBOARD.style.display = 'block';

    console.log(game);
}