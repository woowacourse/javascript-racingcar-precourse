const $result = document.querySelector('#app > h4:nth-child(6)');

export default function printRacing(cars) {
  $result.insertAdjacentHTML('beforeend', '<br>');
  cars.forEach(car => {
    $result.insertAdjacentHTML(
      'beforeend',
      `${car.name}: ${'-'.repeat(car.count)}<br>`
    );
  });
}
