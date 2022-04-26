function shortestDistanceNode(distances, visited) {
  let shortest = null;
  for (let node in distances) {
    let currentIsShortest =
      shortest === null || distances[node] < distances[shortest];
    if (currentIsShortest && !visited.includes(node)) {
      shortest = node;
    }
  }
  return shortest;
}

const findShortestPath = (graph, startNode, endNode) => {
  let distances = {};
  distances[endNode] = Infinity;
  distances = Object.assign(distances, graph[startNode]);
  let parents = { endNode: null };
  for (let child in graph[startNode]) {
    parents[child] = startNode;
  }

  let visited = [];
  let node = shortestDistanceNode(distances, visited);
  while (node) {
    let distance = distances[node];
    let children = graph[node];
    for (let child in children) {
      if (String(child) === String(startNode)) {
        continue;
      } else {
        let newdistance = distance + children[child];

        if (!distances[child] || distances[child] > newdistance) {
          distances[child] = newdistance;
          parents[child] = node;
        }
      }
    }
    visited.push(node);
    node = shortestDistanceNode(distances, visited);
  }

  let shortestPath = [endNode];
  let parent = parents[endNode];
  while (parent) {
    shortestPath.push(parent);
    parent = parents[parent];
  }
  shortestPath.reverse();
  return {
    distances: distances,
    distance: distances[endNode],
    path: shortestPath,
  };
};

function Djkstra(graph, startNode, endNode) {
  let results = findShortestPath(graph, startNode, endNode);
  let finished = results.distances[endNode] != Infinity;
  let edges = [];
  results.path.forEach((element, index) => {
    if (index < results.path.length - 1) {
      edges.push(element + "-" + results.path[index + 1]);
    }
  });
  results.edges = edges;
  return { data: [results], finished: finished };
}

class Dijkstra {
  constructor(graph, startNode, endNode) {
    this.graph = graph;
    this.startNode = startNode;
    this.endNode = endNode;
    this.distance = null;
    this.finished = false;
  }

  reset() {
    this.startNode = null;
    this.endNode = null;
    this.distance = null;
    this.finished = false;
  }

  setStartAndEndNode(startNode, endNode) {
    this.startNode = startNode;
    this.endNode = endNode;
  }

  run() {
    console.log(this.graph);
    let results = Djkstra(this.graph.matrix, this.startNode, this.endNode);
    this.distance = results.distance;
    this.finished = results.finished;

    return results;
  }
}
