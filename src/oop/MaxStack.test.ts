import MaxStack from "./MaxStack";

describe("extends existing Stack class to provide a new prototype methods, getMax", () => {
    it("should return 11 from the stack", () => {
        const stack = new MaxStack();
        stack.push(5);
        stack.push(3);
        stack.push(7);
        stack.push(1);
        stack.push(11);
        expect(stack.getMax()).toBe(11);
    });
    it("should return 7 from the stack after pop method has removed previous max", () => {
        const stack = new MaxStack();
        stack.push(5);
        stack.push(3);
        stack.push(7);
        stack.push(1);
        stack.push(11);
        stack.pop();
        expect(stack.getMax()).toBe(7);
    });
});
