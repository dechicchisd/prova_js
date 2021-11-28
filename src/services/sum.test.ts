import { sum } from './sum'

describe('SOMMA', () => {
    it('somma di due interi positivi', () => {
        expect(sum(3, 5)).toBe(8);
    })

    it('somma di due numeri qualsiasi', () => {
        expect(sum(3, -5)).toBe(-2);
    })
});


