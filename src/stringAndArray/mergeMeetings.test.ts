import mergeMeetings from "./mergeMeetings";

describe("merges overlapping meeting times provided in an array", () => {
    test("it should merge meetings into 3 ranges", () => {
        const input = [
            { startTime: 0, endTime: 1 },
            { startTime: 3, endTime: 5 },
            { startTime: 4, endTime: 8 },
            { startTime: 10, endTime: 12 },
            { startTime: 9, endTime: 10 },
        ];
        const expectedResult = [
            { startTime: 0, endTime: 1 },
            { startTime: 3, endTime: 8 },
            { startTime: 9, endTime: 12 },
        ];
        const result = mergeMeetings(input);
        expect(result).toHaveLength(expectedResult.length);
        for (let i = 0; i < expectedResult.length; i++) {
            expect(result[i].startTime).toBe(expectedResult[i].startTime);
            expect(result[i].endTime).toBe(expectedResult[i].endTime);
        }
    });
    test("it should merge meetings despite one meeting range within another range", () => {
        const input = [
            { startTime: 0, endTime: 1 },
            { startTime: 3, endTime: 6 },
            { startTime: 4, endTime: 5 },
            { startTime: 9, endTime: 10 },
            { startTime: 10, endTime: 12 },
        ];
        const expectedResult = [
            { startTime: 0, endTime: 1 },
            { startTime: 3, endTime: 6 },
            { startTime: 9, endTime: 12 },
        ];
        const result = mergeMeetings(input);
        expect(result).toHaveLength(expectedResult.length);
        for (let i = 0; i < expectedResult.length; i++) {
            expect(result[i].startTime).toBe(expectedResult[i].startTime);
            expect(result[i].endTime).toBe(expectedResult[i].endTime);
        }
    });
});
