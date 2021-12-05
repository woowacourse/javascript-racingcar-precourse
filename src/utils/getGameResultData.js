import {
  PICK_NUMBER_IN_RANGE_MIN,
  PICK_NUMBER_IN_RANGE_MAX,
} from "./constants.js";

const getGameResultData = (data) => {
  const { carNames, racingCount } = JSON.parse(data);
  let maxMoveCount = 0;

  const isMove = (randomNumber) => randomNumber >= 4;

  const setCarResult = () => {
    for (let car of carNames) {
      const randomNumber = MissionUtils.Random.pickNumberInRange(
        PICK_NUMBER_IN_RANGE_MIN,
        PICK_NUMBER_IN_RANGE_MAX
      );

      if (isMove(randomNumber)) car.moveCount++;

      car.moveCounts.push(car.moveCount);
      maxMoveCount = Math.max(maxMoveCount, car.moveCount);
    }
  };

  const setRoundResult = () => {
    for (let round = 0; round < racingCount; round++) {
      setCarResult();
    }
  };

  setRoundResult();

  const winners = carNames
    .filter((car) => car.moveCount === maxMoveCount)
    .map((car) => car.name)
    .join(",");

  return JSON.stringify({
    carNames,
    racingCount,
    maxMoveCount,
    winners,
  });
};

export default getGameResultData;
