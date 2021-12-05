import range from '../src/app/asset/range.js';

test('range', () => {
    expect(range(3)).toEqual([0, 1, 2]);
    expect(range(4)).toEqual([0, 1, 2, 3]);
    expect(range(5)).toEqual([0, 1, 2, 3, 4]);
});
