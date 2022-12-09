const WinnerView = {
  sortByScore(map) {
    return [...map].sort((car1, car2) => car2[1] - car1[1]);
  },

  getWinner(map) {
    const win = [];

    WinnerView.sortByScore(map).forEach(([name, go], index) => {
      if (index === 0) return win.push([name, go]);
      if (win[win.length - 1][1] === go) win.push([name, go]);
    });

    return WinnerView.printWinner(win);
  },

  printWinner(win) {
    const winner = [];

    win.forEach(([name, _]) => {
      winner.push(name);
    });

    return `최종 우승자: ${winner.join(', ')}`;
  },
};
module.exports = WinnerView;
