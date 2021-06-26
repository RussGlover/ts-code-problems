/**
 *
 * @param numbers array of containing numbers in range of 1 to n. Array length is n + 1.
 * @returns a number that was repeated in the array
 */
const findDuplicates = (numbers: number[]): number => {
    if (numbers.length < 1) {
        throw new Error("Invalid numbers argument");
    }
    /**
     * use a method similar to binary search
     *
     * set floor and ceiling for numbers, 1 to n where n is length - 1
     * take midpoint of floor and ceil, to split range into upper and lower ranges
     * count occurences of numbers in range
     * compare occurences to expected amount of numbers in range
     * if one range has more than expected occurences, set its range as new floor and ceiling
     * stop iteration when floor and ceiling converge
     */
    let floor = 1;
    let ceiling = numbers.length - 1;
    while (ceiling > floor) {
        const lowerFloor = floor;
        const lowerCeiling = Math.floor(floor + (ceiling - floor) / 2);
        const upperFloor = lowerCeiling + 1;
        const upperCeiling = ceiling;
        let lowerRangeCount = 0;
        let upperRangeCount = 0;
        numbers.forEach((number) => {
            if (number >= lowerFloor && number <= lowerCeiling) {
                lowerRangeCount += 1;
            }
            if (number >= upperFloor && number <= upperCeiling) {
                upperRangeCount += 1;
            }
        });
        const expectedLowerCount = lowerCeiling - lowerFloor + 1;
        if (lowerRangeCount > expectedLowerCount) {
            ceiling = lowerCeiling;
            continue;
        }
        const expectedUpperCount = upperCeiling - upperFloor + 1;
        if (upperRangeCount > expectedUpperCount) {
            floor = upperFloor;
            continue;
        }
    }
    return ceiling;
};

export default findDuplicates;
