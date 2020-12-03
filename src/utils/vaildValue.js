/*
isCorrectCarNames
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 자동차 이름 1자 이상 제한
- 알파벳,한글,숫자로 구성된 이름만 가능
- 중복 이름 가능
- 공백 포함된 이름 안됨
*/

const rKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
const rNumber = /[0-9]/;
const rAlphabet = /[a-zA-Z]/;
const rEmpty = /\s/g;

export const isCorrectCarNames = (inputCarNames) => {
  for (const carName of inputCarNames) {
    const carNamelength = carName.length;

    if (rEmpty.test(carName)) return false;
    if (carNamelength > 5 || carNamelength < 1) return false;
  }

  return true;
};
