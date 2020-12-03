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

export const printResultOfOneRound = (cars) => {
    const resultArea = document.getElementById("app").querySelectorAll("div + div")[1];
    const resultElem = document.createElement("p");
    let resText = '';
    for (const car of cars) {
        resText += `${car.carName}: ${'-'.repeat(car.forwardCnt)}\n`;
    }
    resultElem.innerText = resText + '\n';
    resultArea.appendChild(resultElem);
}

export const getWinnersName = (cars) => {
    let max = 0;
    let winnersName = [];
    for (const car of cars) {
        if (car.forwardCnt > max) {
            max = car.forwardCnt;
            winnersName = [car.carName];
        } else if (car.forwardCnt === max) {
            winnersName.push(car.carName);
        }
    }
    return winnersName;
}

export const printWinnersName = (winnersName) => {
    const resultArea = document.getElementById("app").querySelectorAll("div + div")[1];
    const resultElem = document.createElement("p");
    let resText = `최종 우승자: ${winnersName.join(", ")}`;

    resultElem.innerText = resText;
    resultArea.appendChild(resultElem);
}