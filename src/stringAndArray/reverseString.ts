const reverseString = (s: string): string => {
    // could use an array method but will do for practice
    // js strings are immutable so cant do in place reverse
    const sArray = s.split("");
    for (let i = 0; i < sArray.length / 2; i++) {
        const overWrittenChar = sArray[s.length - 1 - i];
        sArray[s.length - 1 - i] = sArray[i];
        sArray[i] = overWrittenChar;
    }
    return sArray.join("");
};

export default reverseString;
