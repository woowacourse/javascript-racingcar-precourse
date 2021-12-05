import { $ } from '../dom/dom.js';
import checkUserInputEmpty from './checkUserInputEmpty.js';
import checkValidCarNames from './checkValidCarNames.js';
import showAlertMsg from './showAlertMsg.js';

//유저가 차 이름을 한개만 입력했는지를 확인한다
function checkSingleCar(carNames) {
  if (carNames.includes(',')) {
    return carNames.split(',');
  } else if (!carNames.includes(',')) {
    return [carNames];
  }
}

export default function getUserCarNamesInput() {
  const carNames = $('#car-names-input').value;
  if (checkUserInputEmpty(carNames)) {
    const carNamesList = checkSingleCar(carNames);
    if (checkValidCarNames(carNamesList)) {
      return carNamesList;
    }
  }
  showAlertMsg('carnamesinput');
  return false;
}
