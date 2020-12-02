import { NAME_SEPERATOR } from '../constants/configuration.js';

const checkIsCarAlone = (names) => {
	const carNames = names.split(NAME_SEPERATOR);
	let isCarAlone = false;
	if (carNames.length === 0) {
		isCarAlone = true;
	}

	return isCarAlone;
};

export const checkCarNames = (names) => {
	let isValid = true;
	if (checkIsCarAlone(names)) {
		isValid = false;
	}

	return isValid;
};
