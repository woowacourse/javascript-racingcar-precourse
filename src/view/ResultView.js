const GO = '-';

const ResultView = {
  print(map) {
    let result = '';

    map.forEach((go, name) => {
      result += `${name}: ${GO.repeat(go)}\n`;
    });

    return result;
  },
};

module.exports = ResultView;
