import { EMPTY, ERROR_MESSAGES, NUMBER } from '../constants/index.js';

/**
 * DOM 객체를 하나 선택합니다.
 *
 * @param {string} selector
 * @returns {HTMLElement}
 */
export const $ = selector => document.querySelector(selector);

/**
 * alert에 출력할 에러 메세지를 설정합니다.
 *
 * @param {string} type
 * @returns {undefined} : Falsy
 */
export const setErrorMessage = type => {
  alert(ERROR_MESSAGES[type]);
  return EMPTY;
};

/**
 * 값이 null인지 검사합니다.
 *
 * @param {string|number} value
 * @returns {boolean}
 */
export const isNull = value => value === null || value === undefined;

/**
 * 첫 번째 인자와 두 번째 인자의 값이 같은지 검사합니다.
 *
 * @param {string|number} value
 * @param {string|number} target
 * @returns {boolean}
 */
export const isEquals = (value, target) => value === target;

/**
 * 첫 번째 인자와 두 번째 인자가 다른지 검사합니다.
 *
 * @param {string|number} value
 * @param {string|number} target
 * @returns {boolean}
 */
export const isNotEquals = (value, target) => value !== target;

/**
 * 값이 비어있는지 검사합니다.
 *
 * @param {Array|number|string} value
 * @returns {boolean}
 */
export const isEmpty = value => {
  if (value instanceof Array) return value.length < 1 || value === [];
  if (typeof value === 'number') return value === NUMBER.ZERO;
  return value === EMPTY;
};
