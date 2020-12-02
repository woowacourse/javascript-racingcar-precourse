import { checkCarNames } from './validation.js';
import { preProcessCarNames } from './preProcess.js';

it('preProcessCarNames', () => {
	const preProcessedCarNames = preProcessCarNames('north, east, ');
	expect(preProcessedCarNames).toBe('north,east');
});
it('checkCarNames', () => {
	const isValidNames = checkCarNames('north');
	expect(isValidNames).toBe(true);
});
