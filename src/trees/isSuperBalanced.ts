export class BinaryTreeNode {
  value: number | string;
  left: BinaryTreeNode | null;
  right: BinaryTreeNode | null;
  constructor(value: number | string = 0) {
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
  leafDepths: Set<number>;
  constructor(root: BinaryTreeNode) {
    this.root = root;
    this.leafDepths = new Set();
  }
  preOrderTraverse(node: BinaryTreeNode, depth: number = 0) {
    if (node.left !== null) {
      this.preOrderTraverse(node.left, depth + 1);
    }
    if (node.right !== null) {
      this.preOrderTraverse(node.right, depth + 1);
    }
    if (node.right === null && node.left === null) {
      this.leafDepths.add(depth);
    }
  }
  preOrderStack() {
    const nodes: Array<[BinaryTreeNode, number]> = [[this.root, 1]];
    while (nodes.length > 0) {
      // @ts-expect-error
      const [node, depth] = nodes.pop();
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
  isSuperBalanced(useStack: boolean = false) {
    if (useStack) {
      return this.preOrderStack();
    } else {
      this.preOrderTraverse(this.root, 1);
      if (this.leafDepths.size === 2) {
        const depths = [...this.leafDepths].sort();
        if (depths[depths.length - 1] - depths[0] > 1) {
          return false;
        }
      }
      if (this.leafDepths.size > 2) return false;
      return true;
    }
  }
}
