import {NUM_RULE} from './constants.js';

export const showErrorMessage = ($target, errorMessage) => {
  alert(errorMessage);
  $target.value = '';
  $target.focus();
};

export const showElement = ($target) => {
  $target.style.display = 'block';
};

export const hideElement = ($target) => {
  $target.style.display = 'none';
};

export const hideAllElements = (nodeList) => {
  nodeList.forEach((node) => {
    hideElement(node);
  });
};

export const showDisplayContainer = ($target, $title) => {
  showElement($target);
  showElement($title);
};

export const generateRandomNumber = () => {
  // eslint-disable-next-line no-undef
  return MissionUtils.Random.pickNumberInRange(NUM_RULE.MIN_NUM, NUM_RULE.MAX_NUM);
};
