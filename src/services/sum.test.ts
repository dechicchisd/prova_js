import {sum} from './sum'

describe('SUM', () => {
  it('sum of two positive integer', () => {
    expect(sum(3, 5)).toBe(8)
  })

  it('sum of two positive and negative integer', () => {
    expect(sum(3, -5)).toBe(-2)
  })
})
