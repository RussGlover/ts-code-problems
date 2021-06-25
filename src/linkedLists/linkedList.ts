export class Node {
  value;
  next: Node | null;
  constructor(value: number = 0) {
    this.value = value;
    this.next = null;
  }
}
