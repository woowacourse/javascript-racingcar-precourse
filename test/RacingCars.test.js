import RacingCars from '../src/app/model/RacingCars.js';

describe('RacingCars', () => {
    let racingCars;

    beforeEach(() => {
        racingCars = new RacingCars();
    });

    test('getWinners', () => {
        racingCars.generateCars(['a', 'b', 'c', 'd', 'e']);
        racingCars.cars[0].go();
        racingCars.cars[1].go();
        racingCars.cars[2].go();
        expect(racingCars.getWinners()).toEqual(['a', 'b', 'c']);
    });
});
