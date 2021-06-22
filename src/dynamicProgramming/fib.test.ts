import fib from "./fib";

describe("calculate the nth fibonacci number", () => {
  it("should return 0 for n = 0 and 1 for n = 1", () => {
    expect(fib(0)).toBe(0);
    expect(fib(1)).toBe(1);
  });
  it("should return 1 for n = 2", () => {
    expect(fib(2)).toBe(1);
  });
  it("should return 2 for n = 3", () => {
    expect(fib(3)).toBe(2);
  });
});
