import ValidationError from './validationError.js';

export default class RacingCarGame {}

new RacingCarGame();

const getCarNamesToList = function () {
  const carNamesInput = document.querySelector('#car-names-input');
  const regexp = /[^,\s]+[^,]*[^,\s]+/gi; // ,와 양쪽 공백을 제외한 부분만 가져온다
  const carNamesList = carNamesInput.value.match(regexp);

  if (!carNamesList) {
    throw new ValidationError('자동차 이름을 입력해주세요', carNamesInput);
  }
  if (carNamesList.some(arr => arr.length > 5)) {
    throw new ValidationError(
      '자동차 이름은 5자 이하로 입력해주세요',
      carNamesInput,
    );
  }
  
  return carNamesList;
};

const handleCarNamesSubmitBtn = function () {
  try {
    const carNamesList = getCarNamesToList();
    // TODO: 이름대로 car instant 생성해서 이름 지정하기
    // TODO: 숨겨둔 횟수 div 보이기
  } catch (e) {
    alert(e.message);
    if (e.errElem) {
      e.errElem.focus();
    } 
  }
};

const carNamesSubmitBtn = document.querySelector('#car-names-submit');
carNamesSubmitBtn.addEventListener('click', handleCarNamesSubmitBtn);
