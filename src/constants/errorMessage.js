import { NAME_LENGTH, CAR_NUMBER_MIN } from "./gameRule";

export const ERROR_MESSAGE = {
  EMPTY: "공백인 이름이 있습니다.",
  DUPLICATE: "중복된 이름이 있습니다.",
  LENGTH: `이름을 ${NAME_LENGTH.MAX}자 이하로 입력해주세요.`,
  LESS: `${CAR_NUMBER_MIN}개 이상의 이름을 입력해주세요.`,

  RACING_COUNT: "양의 정수를 입력해주세요.",
};
