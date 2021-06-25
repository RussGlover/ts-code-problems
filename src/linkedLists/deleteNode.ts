import { Node } from "./linkedList";

export const deleteNode = (nodeToDelete: Node) => {
    if (nodeToDelete.next !== null) {
        nodeToDelete.value = nodeToDelete.next.value;
        nodeToDelete.next = nodeToDelete.next.next;
        return;
    }
};
