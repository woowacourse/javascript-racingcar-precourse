const isEnoughAccel = require('../src/app/asset/isEnoughAccel');

test('isEnoughAccel', () => {
    for (let accel = 0; accel <= 3; accel += 1) {
        expect(isEnoughAccel(accel)).toBeFalsy();
    }

    for (let accel = 4; accel <= 9; accel += 1) {
        expect(isEnoughAccel(accel)).toBeTruthy();
    }
});
