import Car from '../src/app/asset/Car.js';
import { CHARACTER } from '../src/app/asset/constant.js';

describe('car', () => {
    let car;

    beforeEach(() => {
        car = new Car();
    });

    test('go1', () => {
        expect(car.go().track).toEqual([CHARACTER.tyreTracks]);
    });

    test('go2', () => {
        expect(car.go().go().track).toEqual([CHARACTER.tyreTracks, CHARACTER.tyreTracks]);
    });
});
