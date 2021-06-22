import makeChange from "./makeChange";

describe("given an amount and coins denominations, finds the number of ways an amount could be made", () => {
  it("should make change", () => {
    const coins = [1, 2, 3];
    const amount = 4;
    const expectedResult = [
      [1, 1, 1, 1],
      [1, 1, 2],
      [1, 3],
      [2, 2],
    ];
    const result = makeChange(amount, coins);
    expect(result).toHaveLength(4);
    expectedResult.forEach((coins) => {
      expect(coins.reduce((coin, sum) => sum + coin)).toBe(amount);
    });
  });
  it("it should return an empty array if its not possible to make change", () => {
    expect(makeChange(3, [5, 4])).toHaveLength(0);
  });
});
