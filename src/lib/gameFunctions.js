import Car from '/src/lib/car.js';

import { 
  GO_AHEAD_MAX_VALUE,
  checkValidCarNamesAndGetErrorMessage,
  checkValidTurnNumber
} from '/src/lib/check.js';

export const createRandomNumber = () => Math.floor(Math.random()*(GO_AHEAD_MAX_VALUE+1));

//올바른 입력이면 배열로 파싱 후 리턴
//그렇지 않으면 경고메시지 후 다시 입력
export const getCarNames = inputs => { //parse
  const {
    isValidInputs,
    message
  } = checkValidCarNamesAndGetErrorMessage(inputs);

  return {
    canStartGame: isValidInputs,
    message: !isValidInputs ? message : null,
    carNames: isValidInputs ? inputs.split(',') : [],
  };
}

//올바른 입력이면 숫자로 변환해서 리턴
//그렇지 않으면 경고메시지 후 다시 입력
export const getTurnNumber = inputs => {
  const {
    isValidInputs,
    message
  } = checkValidTurnNumber(inputs);

  return {
    canStartGame: isValidInputs,
    message: !isValidInputs ? message : null,
    turnNumber: isValidInputs ? Number(inputs) : 0,
  };
}

//자동차 정보 초기화하는 함수
export const getInitCarInfo = carNames => carNames.reduce((acc, carName) => {
  acc.push(new Car(carName));
  return acc;
}, []);

//우승자 구하는 함수
export const getWinCars = cars => {

}
