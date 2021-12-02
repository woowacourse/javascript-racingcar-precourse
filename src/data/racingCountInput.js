import { $ } from '../utils/dom';

export const isNonRacingCount = () => $('#racing-count-input').value == '';
export const isNumber = () => !isNaN(Number($('#racing-count-input').value));
export const isNegative = () => Number($('#racing-count-input').value) < 0;
export const isZero = () => Number($('#racing-count-input')) === 0;
