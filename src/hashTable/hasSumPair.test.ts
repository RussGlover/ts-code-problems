import { hasSumPair } from "./hasSumPair";

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
