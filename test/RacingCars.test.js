import RacingCars from '../src/app/model/RacingCars.js';

describe('RacingCars', () => {
    let racingCars;

    beforeEach(() => {
        racingCars = new RacingCars();
        racingCars.generateCars(['a', 'b', 'c', 'd', 'e']);
    });

    test('getWinners', () => {
        racingCars.cars[0].go();
        racingCars.cars[1].go();
        racingCars.cars[2].go();
        expect(racingCars.getWinners()).toEqual(['a', 'b', 'c']);
    });

    test('getGameResult', () => {
        const gameResult = racingCars.getGameResult(5);
        expect(gameResult.length).toBe(5);
        expect(gameResult.every((game) => game.trackLogs.length <= 5)).toBeTruthy();
        expect(gameResult[0].carName).toBe('a');
        expect(gameResult[1].carName).toBe('b');
        expect(gameResult[2].carName).toBe('c');
        expect(gameResult[3].carName).toBe('d');
        expect(gameResult[4].carName).toBe('e');
    });
});
