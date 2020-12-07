export function makeRacingCountIfPossible(countInput) {
    return isCountValidate(countInput);
}

const isCountValidate = (count) => {
    if (isCountSmallThanOne(count)) {
        throw "0보다 큰 수를 입력해주세요";
    }

    if (isCountNotInteger(count)) {
        throw "자연수를 입력해주세요!!";
    }

    return Number(count);
};

const isCountSmallThanOne = (count) => {
    if (Number(count) <= 0) {
        return true;
    }

    return false;
};

const isCountNotInteger = (count) => {
    if (Number(count) !== parseInt(Number(count))) {
        return true;
    }

    return false;
};