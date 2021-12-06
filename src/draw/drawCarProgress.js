import { $ } from '../dom/dom.js';

export default function DrawCarProgress(carList) {
  const div = document.createElement('div');
  div.style.margin = "40px 0";
  carList.forEach(element => {
    const carProgress = '-'.repeat(element.count);
    const car = document.createElement('p');
    car.innerHTML = `${element.name} : ${carProgress}`;
    car.style.margin = "5px";
    div.append(car);
    $('#racing-result-container').append(div);
  });  
}