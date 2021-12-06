import {DOM_ID, NUM_RULE} from '../utils/constants.js';
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
      this.$props.cars.forEach(({name, position}) => {
        this.printOneBlock(name, position);
      });

      const br = document.createElement('br');
      this.$target.appendChild(br);
    }

    this.printWinner();
  }

  printOneBlock(name, position) {
    const carContainer = document.createElement('div');
    const carText = document.createElement('span');
    let dash = '';
    for (let i = 0; i < position; i = i + 1) {
      dash = dash + '-';
    }
    carText.innerText = `${name}: ${dash}`;
    carContainer.appendChild(carText);
    this.$target.appendChild(carContainer);
  }

  getWinner() {
    this.$props.cars.sort((a, b) => b.position - a.position);
    const winners = [this.$props.cars.shift()];
    this.$props.cars.forEach((car) => {
      if (winners[0].position === car.position) {
        winners.push(car);
      }
    });
    return winners.map((winner) => winner.name);
  }

  printWinner() {
    const winnerTitle = document.createElement('span');
    winnerTitle.innerText = '최종 우승자: ';
    const winnerNames = document.createElement('span');
    winnerNames.innerText = this.getWinner().join(', ');
    winnerNames.id = DOM_ID.RACING_WINNERS;
    this.$target.appendChild(winnerTitle);
    this.$target.appendChild(winnerNames);
  }
}
