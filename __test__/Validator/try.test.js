const Try = require('../../src/Validator/Try');

describe('CarName', () => {
    describe('checkInput', () => {
        it('알맞은 숫자를 입력하였을 때', () => {
          expect(() => new Try ("42")).toBeTruthy()
        });

        it('[Error] 음수를 입력하였을 때', () => {
            expect(() => new Try ("-23")).toThrow()
        });

        it('[Error] 0을 입력하였을 때', () => {
            expect(() => new Try ("0")).toThrow()
        });
    });
});