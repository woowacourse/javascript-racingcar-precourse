import NUMBER from './number.js';

const MESSAGE = {
  ERROR: {
    NOT_MEET_RACING_COUNT_CONDITION: `${NUMBER.MIN_RACING_COUNT}이상의 양의 정수를 입력해주세요`,
    NOT_MEET_CAR_NAME_CONDITION: `${NUMBER.MAX_CAR_NAME_LENGTH}자이하의 이름을 중복되지 않게 입력해주세요! (공백은 이름으로 설정 불가능합니다)`,
    NOT_MEET_CARS_NUM_CONDITION: `${NUMBER.MIN_CARS_LENGTH}대 이상의 차 이름을 넣어주세요`,
  },
};

export default MESSAGE;
