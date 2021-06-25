import { Node } from "./linkedList";
import { deleteNode } from "./deleteNode";

describe("delete a node from a linked list", () => {
  it("should remove node", () => {
    const a = new Node(1);
    const b = new Node(2);
    const c = new Node(3);
    a.next = b;
    b.next = c;
    deleteNode(b);
    expect(a.next.value).toBe(3);
  });
});
