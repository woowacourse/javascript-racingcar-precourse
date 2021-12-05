global.alert = () => {};
global.MissionUtils = {
    Random: {
        pickNumberInRange: (startInclusive, endInclusive) =>
            Math.floor(Math.random() * (endInclusive + 1 - startInclusive)) + startInclusive,
    },
};
