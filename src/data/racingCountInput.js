import { $ } from '../utils/dom';

export const isNonInput = () => $('#racing-count-input').value == '';
export const isNumber = () => !isNaN(Number($('#racing-count-input').value));
export const isNegative = () => Number($('#racing-count-input').value) < 0;
