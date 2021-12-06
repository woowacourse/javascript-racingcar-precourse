import { RANDOM, GAME } from './constants/gameRule.js';

export default function Car(name) {
  this.name = name;
  this.distance = '';

  this.move = function () {
    const randomNumber = MissionUtils.Random.pickNumberInRange(
      RANDOM.MIN,
      RANDOM.MAX
    );

    if (randomNumber >= GAME.MOVE_CONDITION) {
      this.distance += GAME.DISTANCE_MARKER;
    }
  };
}
