const checkBrackets = (code: string): boolean => {
    // if a bracket is seen, count it and record its type
    // brackets need to be properly nested, a stack would work well here
    const openingBrackets: Set<string> = new Set(["{", "(", "["]);
    const closingBrackets: { [key: string]: string } = {
        "}": "{",
        ")": "(",
        "]": "[",
    };
    const bracketStack: string[] = [];
    for (let i = 0; i < code.length; i++) {
        if (
            closingBrackets.hasOwnProperty(code[i]) &&
            bracketStack[bracketStack.length - 1] !== closingBrackets[code[i]]
        ) {
            return false;
        }
        if (openingBrackets.has(code[i])) {
            bracketStack.push(code[i]);
        }
        if (
            closingBrackets.hasOwnProperty(code[i]) &&
            bracketStack[bracketStack.length - 1] === closingBrackets[code[i]]
        ) {
            bracketStack.pop();
        }
    }
    return bracketStack.length === 0;
};

export default checkBrackets;
