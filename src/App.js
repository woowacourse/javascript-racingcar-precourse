const RacingController = require("./Controller/RacingController");


class App {
	play() {
		const racingController = new RacingController()
		racingController.start()
	}
}

const app = new App()

app.play()

module.exports = App;
