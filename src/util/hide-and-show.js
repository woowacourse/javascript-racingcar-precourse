import { DOMS } from "./constant.js";

export const hideRacingCountContainer = () => {
  DOMS.$racingCountForm.style.display = "none";
  DOMS.$racingCountHead.style.display = "none";
};

export const hideResultContainer = () => {
  DOMS.$resultHead.style.display = "none";
};

export const showRacingCountContainer = () => {
  DOMS.$racingCountForm.style.display = "block";
  DOMS.$racingCountHead.style.display = "block";
};

export const showResultContainer = () => {
  DOMS.$resultHead.style.display = "block";
};
