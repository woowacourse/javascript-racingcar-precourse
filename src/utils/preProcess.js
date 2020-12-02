export const preProcessCarNames = (carNames) => {
	let carNameList = carNames.split(',');
	carNameList = carNameList.map((name) => name.trim());
	carNameList = carNameList.filter((name) => name !== '');
	const preProcessedCardNames = carNameList.join(',');

	return preProcessedCardNames;
};
