export const getRandomDigit = () => {
    return Math.floor(Math.random() * 10);
};

export const isDigits = (string) => {
    const nums = "0123456789";
    return [...string].every(str => nums.includes(str));
}

export const isUnderFiveDigits = (string) => {
    const len = string.length;
    return (0 < len && len <= 5) ? true : false;
};

export const isOnlySpaceString = (string) => {
    const nonDuplicatedString = [...new Set(Array.from(string))];
    if (nonDuplicatedString.length === 1) {
        if (nonDuplicatedString[0] === ' ') {
            return true;
        }
    }
    return false;
};

export const isValidCarName = (carNames) => carNames.every(
    carName => (isUnderFiveDigits(carName) && !isOnlySpaceString(carName))
);

export const printResultOfOneRound = (cars) => {
    const resultArea = document.getElementById("app").querySelectorAll("div + div")[1];
    const resultElem = document.createElement("p");
    let resText = '';
    for (const car of cars) {
        resText += `${car.getCarName()}: ${'-'.repeat(car.getForwardCnt())}\n`;
    }
    resultElem.innerText(resText);
    resultArea.appendChild(resultElem);
}