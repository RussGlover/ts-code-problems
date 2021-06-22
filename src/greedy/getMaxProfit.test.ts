import { getMaxProfit } from "./getMaxProfit";

describe("getMaxProfit gets the max day trading profit from an array chronological stock prices", () => {
  test("it should get max profit", () => {
    const stockPrices = [10, 7, 5, 8, 11, 9];
    const result = 6;
    expect(getMaxProfit(stockPrices)).toBe(result);
  });
  test("it should find max profit even if stock goes down all day", () => {
    const stockPrices = [10, 7, 5, 4, 3, 2];
    const result = -1;
    expect(getMaxProfit(stockPrices)).toBe(result);
  });
});
