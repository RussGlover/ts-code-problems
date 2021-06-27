export class BinaryTreeNode {
    value: number;
    left: BinaryTreeNode | null;
    right: BinaryTreeNode | null;
    constructor(value: number = 0) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertLeft(value: number) {
        this.left = new BinaryTreeNode(value);
        return this.left;
    }

    insertRight(value: number) {
        this.right = new BinaryTreeNode(value);
        return this.right;
    }
}

export class BinaryTree {
    root: BinaryTreeNode;
    constructor(root: BinaryTreeNode) {
        this.root = root;
    }
}
