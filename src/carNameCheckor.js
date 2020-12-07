import { Cars } from "./cars.js"

const EMPTY = "";
const NAME_LENGTH_LIMIT = 5;

export function makeCarNameIfPossible(carNameinput) {
    const nameArray = carNameinput.split(",");
    isSameNameExist(nameArray);
    nameArray.forEach(name => isNameValidate(name));

    return new Cars(carNameinput);
};

const isNameValidate = (name) => {

    if (isNameEmpty(name)) {
        throw "자동차 이름으로 공백은 안됩니다.";
    }

    if (isNameLongerThanFive(name)) {
        throw "자동차 이름은 6글자 이상일 수 없습니다.";
    }

    return true;
};

const isNameEmpty = (name) => {
    if (name === EMPTY) {
        return true;
    }

    return false;
};

const isNameLongerThanFive = (name) => {
    if (name.length > NAME_LENGTH_LIMIT) {
        return true;
    }

    return false;
};

const isSameNameExist = (nameArray) => {
    if (nameArray.length !== new Set(nameArray).size) {
        throw "똑같은 이름이 있습니다. 모두 다른 이름으로 해주세요.";
    }
};