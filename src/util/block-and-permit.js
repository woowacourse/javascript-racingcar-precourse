import { DOMS } from "./constant.js";

export const blockRacingCountForm = () => {
  DOMS.$racingCountInput.disabled = true;
  DOMS.$racingCountButton.disabled = true;
};

export const permitRacingCountForm = () => {
  DOMS.$racingCountInput.disabled = false;
  DOMS.$racingCountButton.disabled = false;
};
