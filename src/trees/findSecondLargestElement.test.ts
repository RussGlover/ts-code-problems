import findSecondLargestElement, {
    inorderTraversal,
} from "./findSecondLargestElement";
import { BinaryTree, BinaryTreeNode } from "./BinaryTree";

describe("finds second largest element in binary tree", () => {
    it("should return 20", () => {
        //         20
        //        /  \
        //      15    25
        // level 1
        const one = new BinaryTreeNode(20);
        const tree = new BinaryTree(one);
        // level 2
        const two = new BinaryTreeNode(25);
        const three = new BinaryTreeNode(15);
        one.left = three;
        one.right = two;
        expect(findSecondLargestElement(tree)).toBe(20);
    });
    it("should return 10", () => {
        //      1 (10)
        //     /      \
        // 2 (8)       3 (30)
        //  /   \
        //4 (5) 5 (9)

        const one = new BinaryTreeNode(10);
        const tree = new BinaryTree(one);
        // level 2
        const two = new BinaryTreeNode(8);
        const three = new BinaryTreeNode(30);
        one.left = two;
        one.right = three;
        const four = new BinaryTreeNode(5);
        const five = new BinaryTreeNode(9);
        two.left = four;
        two.right = five;
        expect(findSecondLargestElement(tree)).toBe(10);
    });

    it("should return 20", () => {
        //      1 (10)
        //     /        \
        // 2 (8)         3 (30)
        //  /   \       /
        //4 (5) 5 (9)  6 (20)

        const one = new BinaryTreeNode(10);
        const tree = new BinaryTree(one);
        // level 2
        const two = new BinaryTreeNode(8);
        const three = new BinaryTreeNode(30);
        one.left = two;
        one.right = three;
        const four = new BinaryTreeNode(5);
        const five = new BinaryTreeNode(9);
        two.left = four;
        two.right = five;
        const six = new BinaryTreeNode(20);
        three.left = six;
        expect(findSecondLargestElement(tree)).toBe(20);
    });
});

describe("should return an ordered list of values from a binary search tree", () => {
    it("it should return [ 5, 8, 9, 10, 20, 30 ]", () => {
        //      1 (10)
        //     /        \
        // 2 (8)         3 (30)
        //  /   \       /
        //4 (5) 5 (9)  6 (20)

        const one = new BinaryTreeNode(10);
        const tree = new BinaryTree(one);
        // level 2
        const two = new BinaryTreeNode(8);
        const three = new BinaryTreeNode(30);
        one.left = two;
        one.right = three;
        const four = new BinaryTreeNode(5);
        const five = new BinaryTreeNode(9);
        two.left = four;
        two.right = five;
        const six = new BinaryTreeNode(20);
        three.left = six;
        const result = inorderTraversal(tree);
        expect(result.join(", ")).toBe("5, 8, 9, 10, 20, 30");
    });
});
