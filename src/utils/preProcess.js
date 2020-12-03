import { NAME_SEPERATOR } from '../constants/configuration.js';

export const preProcessCarNames = (carNames) => {
	let carNameList = carNames.split(NAME_SEPERATOR);
	carNameList = carNameList.map((name) => name.trim());
	carNameList = carNameList.filter((name) => name !== '');
	const preProcessedCardNames = carNameList.join(NAME_SEPERATOR);

	return preProcessedCardNames;
};

export const preProcessTryCount = (tryCount) => {
	return Number(tryCount);
};
