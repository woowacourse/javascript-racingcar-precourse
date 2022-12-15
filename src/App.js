const Controller = require('./controller/Controller');

class App {
  #controller = new Controller();

  play() {
    this.#controller.start();
  }
}

const app = new App();
app.play();

module.exports = App;
