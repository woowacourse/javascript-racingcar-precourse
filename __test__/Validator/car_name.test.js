const CarName = require('../../src/Validator/CarName');

describe('CarName', () => {
    describe('checkInput', () => {
        it('콤마와 스페이스로 잘 구분하였을 때', () => {
          expect(() => new CarName ("민수, 영희, 조조")).toBeTruthy()
        });

        it('[Error] 콤마로 구분하지 않았을 때', () => {
            expect(() => new CarName ("민수.영희.조조")).toThrow()
        });

        it('[Error] 자동차 이름이 5글자를 초과하였을 때', () => {
            expect(() => new CarName ("엄마는외계인, 맘스터치, 아몬드봉봉")).toThrow()
        });

        it('[Error] 자동차 이름끼리 중복이 되었을 때', () => {
            expect(() => new CarName ("아몬드봉봉, 아몬드봉봉, 민트초코웩")).toThrow()
        });
    });
});