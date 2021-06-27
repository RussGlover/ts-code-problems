import { SuperBalancedBinaryTree } from "./isSuperBalanced";
import { BinaryTreeNode } from "./BinaryTree";

describe("should determine if tree has leaf nodes at depths differing by more than 1", () => {
    test("it should return true", () => {
        // level 1
        const zero = new BinaryTreeNode(0);
        const tree = new SuperBalancedBinaryTree(zero);
        // level 2
        const two = new BinaryTreeNode(2);
        const one = new BinaryTreeNode(1);
        zero.left = one;
        zero.right = two; // leaf depth 2
        // level 3
        const three = new BinaryTreeNode(3);
        const four = new BinaryTreeNode(4);
        one.left = three;
        one.right = four; // leaf depth 3
        expect(tree.isSuperBalanced()).toBeTruthy();
    });
    test("it should return true", () => {
        // level 1
        const zero = new BinaryTreeNode(0);
        const tree = new SuperBalancedBinaryTree(zero);
        // level 2
        const two = new BinaryTreeNode(2);
        const one = new BinaryTreeNode(1);
        zero.left = one;
        zero.right = two; // leaf depth 2
        // level 3
        const three = new BinaryTreeNode(3);
        one.left = three;
        // level 4
        const four = new BinaryTreeNode(4);
        three.left = four; // leaf depth 4
        expect(tree.isSuperBalanced()).toBeFalsy();
    });
});
