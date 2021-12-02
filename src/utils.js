export const $ = selector => document.querySelector(selector);

export const isEmptyCarNames = string => {
  return /\s/g.test(string);
  //주어진 문자열 str 중 정규 표현식이 일치하는 부분이 있으면 true, 아니면, false.
};
