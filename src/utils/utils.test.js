import { getCarNamesCheckResult } from './validation.js';
import { preProcessCarNames, preProcessTryCount } from './preProcess.js';

it('preProcessCarNames', () => {
  const preProcessedCarNames = preProcessCarNames('north, east, ');
  expect(preProcessedCarNames).toBe('north,east');
});
it('preProcessTryCount', () => {
  const preProcessedTryCount = preProcessTryCount(' 12 ');
  expect(preProcessedTryCount).toBe(12);
});
it('getCarNamesCheckResult', () => {
  expect(getCarNamesCheckResult('north')).toMatchObject({
    isCarNumberNotEnough: true,
  });
});
