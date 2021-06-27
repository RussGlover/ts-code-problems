import binaryTreeCheck from "./isBinaryTree";
import { BinaryTree, BinaryTreeNode } from "./BinaryTree";

describe("returns a boolean indicating if the tree is a binary search tree", () => {
    test("should return true for a binary search tree", () => {
        // level 1
        const zero = new BinaryTreeNode(20);
        const tree = new BinaryTree(zero);
        // level 2
        const two = new BinaryTreeNode(25);
        const one = new BinaryTreeNode(15);
        zero.left = one;
        zero.right = two; // leaf depth 2
        // level 3
        const three = new BinaryTreeNode(10);
        const four = new BinaryTreeNode(16);
        one.left = three;
        one.right = four; // leaf depth 3
        expect(binaryTreeCheck(tree)).toBeTruthy();
    });
    test("should return false for an invalid binary search tree", () => {
        // level 1
        const zero = new BinaryTreeNode(20);
        const tree = new BinaryTree(zero);
        // level 2
        const two = new BinaryTreeNode(16);
        const one = new BinaryTreeNode(15);
        zero.left = one;
        zero.right = two; // leaf depth 2
        // level 3
        const three = new BinaryTreeNode(10);
        const four = new BinaryTreeNode(16);
        one.left = three;
        one.right = four; // leaf depth 3
        expect(binaryTreeCheck(tree)).toBeFalsy();
    });
    test("should return false if a right node is larger than an indirect parent", () => {
        // level 1
        const zero = new BinaryTreeNode(20);
        const tree = new BinaryTree(zero);
        // level 2
        const two = new BinaryTreeNode(25);
        const one = new BinaryTreeNode(15);
        zero.left = one;
        zero.right = two; // leaf depth 2
        // level 3
        const three = new BinaryTreeNode(10);
        const four = new BinaryTreeNode(25); // zero(20) left-> one(15) right-> four(25)
        one.left = three;
        one.right = four; // leaf depth 3
        expect(binaryTreeCheck(tree)).toBeFalsy();
    });
    test("should return false if a left node is smaller and on the right side of a parent", () => {
        // level 1
        const zero = new BinaryTreeNode(20);
        const tree = new BinaryTree(zero);
        // level 2
        const two = new BinaryTreeNode(25);
        const one = new BinaryTreeNode(15);
        zero.left = one;
        zero.right = two; // leaf depth 2
        // level 3
        const three = new BinaryTreeNode(30);
        const four = new BinaryTreeNode(15); // zero(20) right-> two(25) left-> four(15)
        two.left = four;
        one.right = three; // leaf depth 3
        expect(binaryTreeCheck(tree)).toBeFalsy();
    });
});
