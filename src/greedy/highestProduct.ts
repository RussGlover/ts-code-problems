/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 * The input arrayOfInts will always have at least three integers.
 */
const highestProduct = (arrayOfInts: number[]): number => {
    const NUMBER_OF_INTS_IN_PRODUCT = 3;
    const biggestNegativeInts = new Array(NUMBER_OF_INTS_IN_PRODUCT).fill(0);
    const biggestPositiveInts = new Array(NUMBER_OF_INTS_IN_PRODUCT).fill(0);

    arrayOfInts.forEach((number) => {
        for (let i = 0; i < NUMBER_OF_INTS_IN_PRODUCT; i++) {
            if (number > biggestPositiveInts[i]) {
                biggestPositiveInts[i] = number;
                break;
            }
            if (number < 0 && number < biggestNegativeInts[i]) {
                biggestNegativeInts[i] = number;
                break;
            }
        }
    });
    const biggestNegativeProduct =
        biggestNegativeInts.slice(0, 2).reduce((result, num) => result * num) *
        biggestPositiveInts[0];
    const biggestPositiveProduct = biggestPositiveInts.reduce(
        (result, num) => result * num
    );
    return biggestNegativeProduct > biggestPositiveProduct
        ? biggestNegativeProduct
        : biggestPositiveProduct;
};

export default highestProduct;
