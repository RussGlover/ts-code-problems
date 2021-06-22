import { getMaxProfit, hasSumPair } from "./index";

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

describe("hasSumPair return a boolean indicating whether or not two elements of numbers array can be added to equal sum", () => {
  test("should return true", () => {
    const inputArray = [0, 1, 2, 3, 4, 5];
    const inputSum = 4;
    expect(hasSumPair(inputSum, inputArray)).toBeTruthy();
  });
  test("should return false", () => {
    const inputArray = [0, 1];
    const inputSum = 4;
    expect(hasSumPair(inputSum, inputArray)).toBeFalsy();
  });
  test("should return false because numbers can only be used once", () => {
    const inputArray = [0, 2, 3];
    const inputSum = 4;
    expect(hasSumPair(inputSum, inputArray)).toBeFalsy();
  });
});
