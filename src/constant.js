export const error_input_null = "자동차 이름을 입력해 주세요.";
export const error_input_split_space =
  "자동차 이름을 공백이 아닌 콤마로 구분하여 입력해주세요.";
export const error_over_length =
  "자동차 이름을 5자 이하로 콤마로 구분하여 입력해주세요.";
export const error_null_car_names =
  "자동차 이름을 입력 후 시도할 횟수를 입력해 주세요.";
export const error_unvalid_count_input = "시도할 횟수를 입력해 주세요.";
export const getWinnerString = winner => {
  return `최종 우승자: <span id="racing-winners">${winner.join(", ")}</span>`;
};
