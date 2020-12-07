import Car from './car.js';
import {ERROR, ID} from './constants.js';
import { setCarList, setTotalCount } from './utils.js';

function carNamesInput(nameString) {
    let nameList = nameString.split(',');
    return nameList;
}

function isCarNameValid(nameList) {
    for (const i=0; i<nameList.length; i++) {
        if (nameList[i].length > 5) {
            document.alert(ERROR.REWRITE);
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
    for (const carName of carNameList) {
        let car = new Car(carName);
        carList.push(car);
    }
    return carList;
}

export function carNamesButtonEvents(game) {
    let carNamesString = ID.CAR_INPUT.value;
    let carList = carNamesInput(carNamesString);
    
    setTotalCount(game, countNumberOfCars(carList));
    setCarList(game, carList);
}

export function racingCountButtonEvents(game) {
    ID.RACING_COUNT_INPUT.value;
}