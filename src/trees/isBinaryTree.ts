import { BinaryTree, BinaryTreeNode } from "./BinaryTree";

class BinarySearchTreeNode extends BinaryTreeNode {
    rightChildMax: number;
    leftChildMin: number;
    constructor(
        node: BinaryTreeNode,
        rightChildMax: number = Number.POSITIVE_INFINITY,
        leftChildMin: number = Number.NEGATIVE_INFINITY
    ) {
        super(node.value);
        this.rightChildMax = rightChildMax;
        this.leftChildMin = leftChildMin;
        this.left = node.left;
        this.right = node.right;
    }
}

const isBinarySearchTree = (tree: BinaryTree): boolean => {
    const nodeQue: BinarySearchTreeNode[] = [
        new BinarySearchTreeNode(tree.root),
    ];
    while (nodeQue.length > 0) {
        const node = nodeQue.pop() as BinarySearchTreeNode;
        if (node.right !== null) {
            if (node.rightChildMax) {
                if (node.rightChildMax <= node.right.value) {
                    return false;
                }
            }
            if (node.value > node.right.value) {
                return false;
            }
            nodeQue.push(
                new BinarySearchTreeNode(
                    node.right,
                    node.rightChildMax,
                    node.value
                )
            );
        }
        if (node.left !== null) {
            if (node.leftChildMin) {
                if (node.leftChildMin >= node.left.value) {
                    return false;
                }
            }
            if (node.value < node.left.value) {
                return false;
            }
            nodeQue.push(
                new BinarySearchTreeNode(
                    node.left,
                    node.value,
                    node.leftChildMin
                )
            );
        }
    }
    return true;
};

export default isBinarySearchTree;
