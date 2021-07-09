import checkBrackets from "./jsBrackets";

describe("returns true or false indicating if the string argument has properly nested and closed brackets", () => {
    it("should return true for '{ [ ] ( ) }'", () => {
        const input = "{ [ ] ( ) }";
        const result = checkBrackets(input);
        expect(result).toBeTruthy();
    });
    it("should return false for '{ [ ( ] ) }'", () => {
        const input = "{ [ ( ] ) }";
        const result = checkBrackets(input);
        expect(result).toBeFalsy();
    });
    it("should return false for '{ [ }'", () => {
        const input = "{ [ }";
        const result = checkBrackets(input);
        expect(result).toBeFalsy();
    });
});
