export const ELEMENT_ID = {
  carNameInputId: '#car-names-input',
  carNameSubmitId: '#car-names-submit',
  racingCountInputId: '#racing-count-input',
  racingCountSubmitId: '#racing-count-submit',
};

export const CAR_NAME_RULES = {
  minLength: 1,
  maxLength: 5,
  separator: ',',
};

export const RACING_COUNT_RULES = {
  minCount: 1,
};

export const ERR_MESSAGE = {
  carNameLength: '공백을 제외한 1~5글자 사이의 자동차 이름을 사용해주세요.',
  carNameSame: '중복되지 않는 자동차 이름을 사용해주세요.',
  racingCount: '1이상의 시도할 횟수를 입력해주세요.',
};
