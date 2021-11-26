import { sum } from './sum'

describe('SOMMA', () => {
    test('somma di due interi positivi', () => {
        expect(sum(3, 5)).toBe(8);
    })

    test('somma di due numeri qualsiasi', () => {
        expect(sum(3, -5)).toBe(-2);
    })
});


