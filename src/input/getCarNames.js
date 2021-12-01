import { $carNamesInput, $carNamesSubmit } from '../constants/HTMLconstant.js';

export default function getCarNames() {
  $carNamesSubmit.addEventListener('click', e => {
    e.preventDefault();
    const carNames = $carNamesInput.value;
  });
}
