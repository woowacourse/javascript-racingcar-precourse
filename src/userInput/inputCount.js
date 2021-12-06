import {$} from '../dom/dom.js';

export default function InputCount() {
  const count = $('#racing-count-input').value;
  if (count.length < 1 || count<1) {
    alert('1이상의 수를 입력해주세요.');
    $('#racing-count-input').value = '';
    return false;
  }
  return count;
}