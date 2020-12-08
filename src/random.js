export default class MakeRandomNumbers {
  constructor(count) {
    this.nums = [];
    for (let i = 0; i < count; i++) {
      this.nums.push(parseInt(Math.random() * 9) + 1);
    }
  }
}
