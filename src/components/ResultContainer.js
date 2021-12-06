import {NUM_RULE} from '../utils/constants.js';
import {generateRandomNumber, showDisplayContainer} from '../utils/util.js';
import Component from './Component.js';

export default class ResultContainer extends Component {
  setup() {
    this.$title = this.$props.$title;
  }

  mounted() {
    showDisplayContainer(this.$target, this.$title);
    this.raicing();
  }

  setEvent() {}

  moveCar() {
    this.$props.cars.forEach((car) => {
      const randomNumber = generateRandomNumber();
      if (randomNumber >= NUM_RULE.NAME_LIMIT) {
        car.move();
      }
    });
  }

  raicing() {
    for (let i = 0; i < this.$props.count; i = i + 1) {
      this.moveCar();
    }
  }
}
