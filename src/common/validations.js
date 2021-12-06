import { EMPTY, NUMBER } from '../constants/index.js';
import { isEquals, isNotEquals, setErrorMessage } from './utils.js';

/**
 * 좌우 여백을 제거하여 배열로 반환합니다.
 *
 * @param {string} inputNames
 * @returns {string[]}
 */
export const filteredSideBlank = inputNames => inputNames.split(',').map(name => name.trim());

/**
 * 배열 원소의 공백 여부를 검사합니다.
 *
 * @param {string[]} values
 * @returns {[string[], boolean]}
 */
export const blankCheck = values => {
  const checkedValues = values.filter(name => isNotEquals(name, EMPTY));
  const isInValid = isNotEquals(values.length, checkedValues.length);
  return [checkedValues, isInValid];
};

/**
 * 배열 원소의 길이를 검사합니다.
 *
 * @param {string | string[]} value
 * @returns
 */
export const lengthCheck = value => {
  if (value instanceof Array) {
    const checkedValues = value.filter(name => name.length <= 5);
    const isInValid = isNotEquals(value.length, checkedValues.length);
    return [checkedValues, isInValid];
  }
  return [value, value.length > NUMBER.ZERO];
};

/**
 * 배열 원소의 중복 여부를 검사합니다.
 *
 * @param {string[]} values
 * @returns
 */
export const duplicateCheck = values => {
  const checkedValues = [...new Set(values)];
  const isInValid = isNotEquals(values.length, checkedValues.length);
  return [checkedValues, isInValid];
};

/**
 * 입력 값에 대해 유효성을 검사합니다.
 *  1. 이름이 없을 수 없습니다.
 *  2. 자동차의 이름은 최대 5자 이하입니다.
 *  3. 중복된 이름은 허용되지 않습니다.
 *
 * @param {string[]} inputValue
 * @returns {string[] | ''}
 */
export const inputValidation = inputValue => {
  const filteredValues = filteredSideBlank(inputValue);

  const [checkedBlank, blankError] = blankCheck(filteredValues);
  if (blankError) return setErrorMessage('blankError');

  const [checkedLength, lengthError] = lengthCheck(checkedBlank);
  if (lengthError) return setErrorMessage('lengthError');

  const [checkedDuplicate, dupError] = duplicateCheck(checkedLength);
  if (dupError) return setErrorMessage('dupError');

  return checkedDuplicate;
};

/**
 * 양의 정수인지 검사합니다.
 * 1. 값이 0일 수 없습니다.
 * 2. 값이 음수일 수 없습니다.
 * 3. 값이 소수일 수 없습니다.
 *
 * @param {number|string} target
 * @returns {number | ''}
 */
export const isPositiveInteger = target => {
  const parsed = +target;

  if (isEquals(parsed, NUMBER.ZERO)) return setErrorMessage('zeroError');

  if (parsed < NUMBER.ZERO) return setErrorMessage('negativeError');

  if (isNotEquals(Number.isInteger(parsed), true)) return setErrorMessage('decimalError');

  return parsed;
};
