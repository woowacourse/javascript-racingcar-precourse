export const getRandomDigit = () => {
    return Math.floor(Math.random() * 10);
};

export const isUnderFiveDigits = (string) => {
    const len = string.length;
    return (0 < len && len <= 5) ? true : false;
};

export const isOnlySpaceString = (string) => {
    const nonDuplicatedString = [...new Set(Array.from(string))];
    console.log(nonDuplicatedString);
    if (nonDuplicatedString.length === 1) {
        if (nonDuplicatedString[0] === ' ') {
            return true;
        }
    }
    return false;
};