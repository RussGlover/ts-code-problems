import { findRotationPoint } from "./index";

describe.only("it should find the rotation point in the semi alphabetical list", () => {
  test("should return rotation index", () => {
    const words = [
      "ptolemaic",
      "retrograde",
      "supplant",
      "undulate",
      "xenoepist",
      "asymptote",
      "babka",
      "banoffee",
      "engender",
      "karpatka",
      "othellolagkage",
    ];
    const result = 5;
    expect(findRotationPoint(words)).toBe(result);
  });
  test("should return 0 if list is not rotated", () => {
    const words = [
      "asymptote",
      "babka",
      "banoffee",
      "engender",
      "karpatka",
      "othellolagkage",
      "ptolemaic",
      "retrograde",
      "supplant",
      "undulate",
      "xenoepist",
    ];
    const result = 0;
    expect(findRotationPoint(words)).toBe(result);
  });
});
