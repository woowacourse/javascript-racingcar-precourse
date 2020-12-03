export const getRandomDigit = () => {
	return Math.floor(Math.random() * 10);
};

export const isUnderFiveDigits = (string) => {
	return string.length <= 5 ? true : false;
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
