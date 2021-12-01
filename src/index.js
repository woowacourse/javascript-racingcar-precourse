function App() {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
  });
  document.querySelector('#car-names-submit').addEventListener('click', () => {
    const inputString = document.querySelector('#car-names-input').value.trim();
    const nameList = inputString.split(',').map((name) => name.trim());
    console.log(nameList);
  });
}

App();
