import highestProduct from "./highestProduct";

describe("given an array of integers, return the highest possible product of 3 integers", () => {
    test("find highest product to be 20", () => {
        expect(highestProduct([5, 4, 3, 2, 1])).toBe(60);
    });
    test("find highest product even with negative numbers", () => {
        expect(highestProduct([-10, -9, 5, 4, 3, 2, 1])).toBe(450);
    });
    test("find biggest product with only 1 negative number in array", () => {
        expect(highestProduct([-10, 5, 4, 3, 2, 1])).toBe(60);
    });
});
