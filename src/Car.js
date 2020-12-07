/**
 * @author sunhpark42 <sunhpark42@gmail.com>
 * Car module with getRandomNumber and Go
 */
export default class Car {
  /**
   * init Car by name, position.
   * @param {string} name
   */
  constructor(name) {
    this.name = name;
    this.position = 0;
  };
  /**
   * getRandom Number 0 - 9
   * @return {number}
   */
  getNumber() {
    return Math.floor(Math.random() * Math.floor(10));
  }
  /**
   * go foward 1 step.
   */
  go() {
    this.position += 1;
  };
  /**
   * play one stage
   */
  play() {
    if (this.getNumber() >= 4) {
      this.go();
    }
  }
}
