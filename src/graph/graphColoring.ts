export class GraphNode {
    label: string;
    neighbors: Set<GraphNode>;
    color: string | null;
    constructor(label: string) {
        this.label = label;
        this.neighbors = new Set();
        this.color = null;
    }
}

const AVAILABLE_COLORS = ["blue", "yellow", "red", "green", "orange", "purple"];
const findGraphColoring = (graph: GraphNode[]): GraphNode[] => {
    const degree = graph.reduce(
        (max, node) => (node.neighbors.size > max ? node.neighbors.size : max),
        0
    );
    if (degree > AVAILABLE_COLORS.length) {
        throw new Error("Graph degree is larger than has been handled");
    }
    const colors = AVAILABLE_COLORS.slice(0, degree);
    // could sort the graph nodes by descending degree to optimize further
    graph.forEach((node) => {
        // look at each neighbor and check its color
        // assign a color not in neighbor colors to node
        if (node.neighbors.has(node)) {
            throw new Error("node has a loop. legal coloring is impossible.");
        }
        const neighborColors = new Set(
            [...node.neighbors.values()]
                .map((neighbor) => neighbor.color)
                .filter((color) => color !== null)
        );
        for (let i = 0; i < colors.length; i++) {
            const color = colors[i];
            if (!neighborColors.has(color)) {
                node.color = color;
                break;
            }
        }
        if (node.color === null) {
            // what to do if color cant be assigned
            throw new Error("Have not yet handled this");
        }
    });
    return graph;
};

export default findGraphColoring;
