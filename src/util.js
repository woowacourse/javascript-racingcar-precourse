class Util {
  displayContainer = (container, show) => {
    if (show) {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }
  };

  generateRandomNumber = () => {
    const num = Math.floor(Math.random() * 10);

    return num;
  };
}

export const { displayContainer, generateRandomNumber } = new Util();
