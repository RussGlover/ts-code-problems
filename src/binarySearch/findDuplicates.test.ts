import findDuplicates from "./findDuplicates";

describe("finds one duplicate in an array of integers of range(1,n) with length 1+n", () => {
    it("should find duplicate", () => {
        const input = [1, 2, 3, 4, 4, 5];
        expect(findDuplicates(input)).toBe(4);
        expect(
            findDuplicates([10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 7, 8, 9])
        ).toBe(7);
    });
});
