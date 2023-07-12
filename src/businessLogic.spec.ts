import { sum } from './businessLogic'

// JEST, testing library
it('computes the sum of two numbers', async () => {
  const a = 1
  const b = 2
  const c = sum(1, 2)
  expect(a + b).toEqual(c)
})