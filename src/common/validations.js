import { setErrorMessage } from './utils.js';

/**
 * 좌우 여백을 제거하여 배열로 반환합니다.
 *
 * @param {string} inputNames
 * @returns {string[]}
 */
export const filteredSideBlacnk = inputNames => inputNames.split(',').map(name => name.trim());

/**
 * 배열 원소의 공백 여부를 검사합니다.
 *
 * @param {string[]} values
 * @returns {[string[], boolean]}
 */
export const blankCheck = values => {
  const checkedValues = values.filter(name => name !== '');
  const isInValid = values.length !== checkedValues.length;
  return [checkedValues, isInValid];
};

/**
 * 배열 원소의 길이를 검사합니다.
 *
 * @param {*} value
 * @returns
 */
export const lengthCheck = value => {
  if (value instanceof Array) {
    const checkedValues = value.filter(name => name.length <= 5);
    const isInValid = value.length !== checkedValues.length;
    return [checkedValues, isInValid];
  }
  return [value, value.length > 0];
};

/**
 * 배열 원소의 중복 여부를 검사합니다.
 *
 * @param {*} values
 * @returns
 */
export const duplicateCheck = values => {
  const checkedValues = [...new Set(values)];
  const isInValid = values.length !== checkedValues.length;
  return [checkedValues, isInValid];
};

/**
 * 입력 값에 대해 유효성을 검사합니다.
 *  1. 이름이 없을 수 없습니다.
 *  2. 자동차의 이름은 최대 5자 이하입니다.
 *  3. 중복된 이름은 허용되지 않습니다.
 *
 * @param {string[]} inputValue
 * @returns
 */
export const inputValidation = inputValue => {
  const filteredValues = filteredSideBlacnk(inputValue);

  const [checkedBlank, blankError] = blankCheck(filteredValues);
  if (blankError) return setErrorMessage('blankError');

  const [checkedLength, lengthError] = lengthCheck(checkedBlank);
  if (lengthError) return setErrorMessage('lengthError');

  const [checkedDuplicate, dupError] = duplicateCheck(checkedLength);
  if (dupError) return setErrorMessage('dupError');

  return checkedDuplicate;
};
