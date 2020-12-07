import {ERROR, ID} from './constants';

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

export function carNameListener(e) {
    return ID.CAR_INPUT.value;
}

export function racingCountListener(e) {
    return ID.RACING_COUNT_INPUT.value;
}