import reverseString from "./reverseString";

describe("reverses a string and returns it", () => {
    test("david input should return divad", () => {
        const input = "david";
        const expectedResult = "divad";
        const result = reverseString(input);
        expect(result).toBe(expectedResult);
    });
});
