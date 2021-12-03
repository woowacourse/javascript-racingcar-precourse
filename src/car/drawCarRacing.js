import { $ } from '../dom/dom.js';

function computeForward(count) {
  let road = '';
  for (let i = 0; i < count; i++) {
    road = road + '-';
  }
  return road;
}

export default function drawCarRacing(carInstanceList) {
  const container = document.createElement('div');
  container.style.marginBottom = '40px';

  carInstanceList.forEach((item) => {
    const car = document.createElement('p');
    const carPoint = document.createTextNode(
      `${item.name}: ${computeForward(item.count)}`
    );
    car.append(carPoint);
    container.appendChild(car);
  });
  $('#app').appendChild(container);
}
