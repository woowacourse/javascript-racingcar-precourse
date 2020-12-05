import countButtonClick from "./countHandler.js";
import namesButtonClick from "./namesHandler.js";

const handler = () => {
  const namesButton = document.getElementById("car-names-submit");
  const raceCountButton = document.getElementById("racing-count-submit");

  namesButton.addEventListener("click", namesButtonClick);
  raceCountButton.addEventListener("click", countButtonClick);
};

export default handler;
