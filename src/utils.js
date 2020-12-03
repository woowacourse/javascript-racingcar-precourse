export const getRandomDigit = () => {
	return Math.floor(Math.random() * 10);
};

export const isUnderFiveDigits = (string) => {
	return string.length <= 5 ? true : false;
};
