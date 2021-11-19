import { sum as testSum } from './sum'

describe('SOMMA', () => {
    test('somma di due interi positivi', () => {
        expect(testSum(3, 5)).toBe(8);
    })

    test('somma di due numeri qualsiasi', () => {
        expect(testSum(3, -5)).toBe(-2);
    })
});


