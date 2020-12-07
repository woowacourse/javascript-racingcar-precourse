import {ERROR} from './constants.js';

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

export function racingCountInput(racingCount) {
    
}
