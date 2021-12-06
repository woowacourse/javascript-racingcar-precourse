import MakeRandomNumber from '../randomNumber/makeRandomNumber.js';

export default function ComputeProgress(carL) {
  carL.forEach(element => {
    let randomNum = MakeRandomNumber();
    if (randomNum >= 4) {
      element.plusCount();
    }
  });
}