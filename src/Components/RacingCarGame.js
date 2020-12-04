class RacingCarGame {
  constructor({ $target }) {
    this.$target = $target;
    this.state = this.initState();
  }

  initState() {
    return {
      round: 0,
      players: [],
    };
  }

  setPlayers() {}
}

export default RacingCarGame;
