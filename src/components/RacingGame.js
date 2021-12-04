import { isEmpty } from '../common/utils.js';
import { NUMBER } from '../constants/index.js';
import Car from './Car.js';
import Render from './Render.js';

/* eslint-disable no-undef */
const { pickNumberInRange } = MissionUtils.Random;

export default class RacingGame {
  constructor($element) {
    this.render = new Render($element);

    this.racingCars = [];
  }

  /**
   * 자동차 등록 여부를 반환합니다.
   *
   * @returns {boolean}
   */
  isNotRegisteredCars() {
    return !this.racingCars.length;
  }

  /**
   * 레이스 1별 가장 많이 움직인 수 반환합니다.
   *
   * @returns {number}
   */
  oneTrackRaceMaxMove() {
    return this.racingCars.reduce((maxMoves, car) => {
      const [moveCount, raceResult] = car.moveForward(pickNumberInRange(NUMBER.START, NUMBER.END));
      this.render.appendChildDOM(raceResult);
      return Math.max(moveCount, maxMoves);
    }, NUMBER.ZERO);
  }

  /**
   * 설정된 자동차를 초기화시킵니다. 자동차가 없다면 파라미터를 확인하여 등록합니다.
   *
   * @param {string[]} carNames
   */
  initialCars(carNames = []) {
    this.render.initDOM();

    if (isEmpty(carNames)) return this.racingCars.forEach(car => car.initMoves());

    this.racingCars = carNames.map(name => new Car(name, NUMBER.CONDITION));
  }

  /**
   * 지정된 레이싱 횟수만큼 게임을 진행하고, 결과를 DOM에 렌더링하는 gameResult를 호출합니다.
   * 결과가 없다면 DOM을 초기화합니다.
   *
   * @param {number} count
   * @returns
   */
  gameStart(count) {
    this.initialCars();

    const finished = Array.from({ length: count }).reduce((result, _, racing) => {
      this.render.createDOM(racing);
      return [...result, this.oneTrackRaceMaxMove()];
    }, []);

    if (isEmpty(finished)) return this.render.initDOM();

    return this.gameResult(finished[count - 1]);
  }

  /**
   * 마지막 레이스의 최종 전진 횟수를 각 차와 비교하여 우승자를 추출한 뒤 결과를 렌더링합니다.
   *
   * @param {number} maxMoves
   */
  gameResult(maxMoves) {
    const getWinnerCars = this.racingCars
      .reduce(
        (result, { moveCount, name }) => (moveCount === maxMoves ? [...result, name] : result),
        [],
      )
      .join(', ');

    this.render.renderDOM(getWinnerCars);
  }
}
