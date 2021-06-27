import { BinaryTree, BinaryTreeNode } from "./BinaryTree";

export class SuperBalancedBinaryTree extends BinaryTree {
    leafDepths: Set<number>;
    constructor(root: BinaryTreeNode) {
        super(root);
        this.leafDepths = new Set();
    }
    isSuperBalanced() {
        const nodes: Array<[BinaryTreeNode, number]> = [[this.root, 1]];
        while (nodes.length > 0) {
            const [node, depth] = nodes.pop() as [BinaryTreeNode, number];
            if (node.left !== null) {
                nodes.push([node.left, depth + 1]);
            }
            if (node.right !== null) {
                nodes.push([node.right, depth + 1]);
            }
            if (node.right === null && node.left === null) {
                this.leafDepths.add(depth);
                if (this.leafDepths.size === 2) {
                    const depths = [...this.leafDepths].sort();
                    if (depths[depths.length - 1] - depths[0] > 1) {
                        return false;
                    }
                }
                if (this.leafDepths.size > 2) return false;
            }
        }
        return true;
    }
}
