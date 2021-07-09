import findGraphColoring, { GraphNode } from "./graphColoring";

describe("finds graph coloring for undirected graph", () => {
    it("should return a graph where each node has a color not equal to any neighbors", () => {
        const a = new GraphNode("a");
        const b = new GraphNode("b");
        const c = new GraphNode("c");

        a.neighbors.add(b);
        b.neighbors.add(a);
        c.neighbors.add(b);
        b.neighbors.add(c);

        const graph = [a, b, c];
        const result = findGraphColoring(graph);
        result.forEach((node) => {
            node.neighbors.forEach((neighbor) => {
                expect(node.color !== null).toBeTruthy();
                expect(node.color === neighbor.color).toBeFalsy();
            });
        });
    });
    it("should throw an error if graph contains a loop", () => {
        const a = new GraphNode("a");

        a.neighbors.add(a);

        const graph = [a];

        expect(() => findGraphColoring(graph)).toThrowError();
    });
});
