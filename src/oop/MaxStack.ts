class Stack {
    items: number[];
    constructor() {
        // Initialize an empty stack
        this.items = [];
    }

    // Push a new item onto the stack
    push(item: number) {
        this.items.push(item);
    }

    // Remove and return the last item
    pop() {
        // If the stack is empty, return null
        // (It would also be reasonable to throw an exception)
        if (!this.items.length) {
            return null;
        }
        return this.items.pop();
    }

    // Returns the last item without removing it
    peek() {
        if (!this.items.length) {
            return null;
        }
        return this.items[this.items.length - 1];
    }
}

class MaxStack extends Stack {
    maxItem: Stack;
    constructor() {
        super();
        this.maxItem = new Stack();
    }
    push(item: number) {
        this.items.push(item);
        if (
            this.maxItem.peek() === null ||
            (this.maxItem.peek() as number) < item
        ) {
            this.maxItem.push(item);
        }
    }

    pop() {
        if (!this.items.length) {
            return null;
        }
        if (this.maxItem.peek() === this.peek()) {
            this.maxItem.pop();
        }
        return this.items.pop();
    }

    // return the largest integer without removing it
    getMax() {
        return this.maxItem.peek();
    }
}

export default MaxStack;
