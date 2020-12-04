import { makeCarNamesCheckResult, checkTryCount } from './validation.js';
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
  expect(makeCarNamesCheckResult('north')).toMatchObject({
    isCarNumberNotEnough: true,
  });
});
it('checkTryCount', () => {
  expect(checkTryCount(12.5)).toBe(false);
  expect(checkTryCount(-2)).toBe(false);
  expect(checkTryCount(0)).toBe(false);
});
