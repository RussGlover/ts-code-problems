import { stringPermutations } from "./stringPermutations";

describe("returns list of all string permutations", () => {
  it("should find permutations of ab", () => {
    const input = "ab";
    const result = stringPermutations(input);
    const expectedResult = ["ba", "ab"];
    expect(expectedResult.length).toBe(result.size);
    expectedResult.forEach((perm) => {
      expect(result).toContain(perm);
    });
  });
  it("should find permutations of a", () => {
    const input = "a";
    const result = stringPermutations(input);
    const expectedResult = ["a"];
    expect(expectedResult.length).toBe(result.size);
    expectedResult.forEach((perm) => {
      expect(result).toContain(perm);
    });
  });
  it("should find permutations of abc", () => {
    const input = "abc";
    const result = stringPermutations(input);
    const expectedResult = ["cba", "bca", "bac", "cab", "acb", "abc"];
    expect(expectedResult.length).toBe(result.size);
    expectedResult.forEach((perm) => {
      expect(result).toContain(perm);
    });
  });
  it("should find permutations of aa", () => {
    const input = "aa";
    const result = stringPermutations(input);
    const expectedResult = ["aa"];
    expect(expectedResult.length).toBe(result.size);
    expectedResult.forEach((perm) => {
      expect(result).toContain(perm);
    });
  });
});
