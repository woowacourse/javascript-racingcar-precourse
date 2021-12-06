export default () => {
  const $app = document.querySelector('#app');

  $app.querySelector('input[type=text]').id = 'car-names-input';
  $app.querySelector('input[type=text] ~ button').id = 'car-names-submit';

  $app.querySelector('input[type=number]').id = 'racing-count-input';
  $app.querySelector('input[type=number] ~ button').id = 'racing-count-submit';
};
