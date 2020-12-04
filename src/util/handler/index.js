const namesButtonClick = (namesInput) => {
  const names = namesInput.value;
};

const handler = () => {
  const namesButton = document.getElementById("car-names-submit");
  const namesInput = document.getElementById("car-names-input");

  if (namesButton) {
    namesButton.addEventListener("click", () => {
      namesButtonClick(namesInput);
    });
  }
};

export default handler;
