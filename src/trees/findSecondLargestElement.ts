import { BinaryTree, BinaryTreeNode } from "./BinaryTree";

const findSecondLargestElement = (tree: BinaryTree) => {
    if (!tree.root || (!tree.root.left && !tree.root.right)) {
        throw new Error("tree does not contain two or more nodes");
    }
    let current = tree.root;
    while (current.right) {
        if (!current.right.right && !current.right.left) {
            return current.value;
        }
        current = current.right;
    }
    current = current.left as BinaryTreeNode;
    while (current.right) {
        current = current.right;
    }
    return current.value;
};

export const inorderTraversal = (tree: BinaryTree) => {
    if (!tree.root) {
        throw new Error("tree does not contain any nodes");
    }
    const nodeStack: BinaryTreeNode[] = [];
    const traverseLeft = (startNode: BinaryTreeNode) => {
        let node = startNode;
        while (node) {
            nodeStack.push(node);
            node = node.left as BinaryTreeNode;
        }
    };
    traverseLeft(tree.root);
    let node: BinaryTreeNode;
    const inorderValues: number[] = [];
    while (nodeStack.length > 0) {
        node = nodeStack.pop() as BinaryTreeNode;
        inorderValues.push(node.value);
        if (node.right) {
            traverseLeft(node.right);
        }
    }
    return inorderValues;
};

export const breadthFirstTraverse = (tree: BinaryTree) => {
    const nodeQue: BinaryTreeNode[] = [tree.root];
    const values: number[] = [];
    while (nodeQue.length > 0) {
        const node = nodeQue.shift() as BinaryTreeNode;
        values.push(node.value);
        if (node.left) {
            nodeQue.push(node.left);
        }
        if (node.right) {
            nodeQue.push(node.right);
        }
    }
    return values;
};

export default findSecondLargestElement;
