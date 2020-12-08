import { makeCarNamesCheckResult, checkTryCount } from './validation.js';
import {
  preProcessCarNamesToCarNameList,
  preProcessTryCount,
} from './preProcess.js';

it('preProcessCarNamesToCarNameList', () => {
  const preProcessedCarNameList = preProcessCarNamesToCarNameList(
    'north, east, '
  );
  expect(preProcessedCarNameList).toContain('north');
  expect(preProcessedCarNameList).toContain('east');
});
it('preProcessTryCount', () => {
  const preProcessedTryCount = preProcessTryCount(' 12 ');
  expect(preProcessedTryCount).toBe(12);
});
it('getCarNamesCheckResult', () => {
  expect(makeCarNamesCheckResult(['north'])).toMatchObject({
    isCarNumberEnough: false,
    isCarNameNotLong: true,
    isAllCarNameDifferent: true,
  });
  expect(makeCarNamesCheckResult(['north', 'testtest'])).toMatchObject({
    isCarNumberEnough: true,
    isCarNameNotLong: false,
    isAllCarNameDifferent: true,
  });
  expect(makeCarNamesCheckResult(['north', 'north', 'north'])).toMatchObject({
    isCarNumberEnough: true,
    isCarNameNotLong: true,
    isAllCarNameDifferent: false,
  });
});
it('checkTryCount', () => {
  expect(checkTryCount(12.5)).toBe(false);
  expect(checkTryCount(-2)).toBe(false);
  expect(checkTryCount(0)).toBe(false);
});
