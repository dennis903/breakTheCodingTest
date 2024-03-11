class Graph {
	constructor() {
		this.nodes = {};
	}

	addNode(node) {
		this.nodes[node] = this.nodes[node] || [];
	}

	contains(node) {
		return this.nodes[node] ? true : false;
	}

	removeNode(node) {
		this.nodes[node] ? delete this.nodes[node] : null;
	}

	hasEdge(from, to) {
		return this.nodes[from] &&
			this.nodes[to] &&
			this.nodes[from].includes(to) &&
			this.nodes[to].includes(from);
	}

	addEdge(from, to) {
		if (this.nodes[from] && this.nodes[to]) {
			this.nodes[from].push(to);
			this.nodes[to].push(from);
		}
	}

	removeEdge(from, to) {
		if (!this.nodes[from] || !this.nodes[to]) {
			return;
		}

		if (!this.nodes[from].includes(to) || !this.nodes[to].includes(from)) {
			return;
		}

		this.nodes[from][this.nodes[from].indexOf(to)] = '';
		this.nodes[to][this.nodes[to].indexOf(from)] = '';
	}
}

const graph = new Graph();

graph.addNode(100);
graph.addNode(1);
graph.addNode(200);
graph.addNode(400);
graph.addEdge(100, 400);
graph.addEdge(400, 200);
graph.removeEdge(100, 400);
console.log(graph);

/**
Graph {
	nodes: { '1': [], '100': [ 400 ], '200': [ 400 ], '400': [ 100, 200 ] }     
}
*/