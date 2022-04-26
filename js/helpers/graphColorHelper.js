class GraphColorHelper {
  constructor(cy, nodeColor, edgeColor) {
    this.cy = cy;
    this.nodeColor = nodeColor;
    this.edgeColor = edgeColor;
    this.edges = [];
    this.index = 0;
    this.directed = false;
  }

  setEdges(edges) {
    this.edges = edges;
  }

  getNodeById(id) {
    return this.cy.$id(id);
  }

  getEdge(from, to) {
    return this.cy.$id(from + "-" + to);
  }

  getEdgeById(id) {
    return this.cy.$id(id);
  }

  setNodeColor(node) {
    //set the color of a node
    this.getNodeById(node).style("background-color", this.nodeColor);
  }

  setEdgeColor(edge) {
    //set the color of an edge
    console.log("edge id " + edge.id());
    edge.style("line-color", "#ff0000");
  }

  resetEdgeColor(edge) {
    //reset the color of an edge to the original color
    edge.style("line-color", "#666666");
  }

  resetNodeColor(node) {
    //reset the color of a node to the original color
    this.getNodeById(node).style("background-color", "#666666");
  }

  colorGraphOnceForward() {
    if (this.index >= this.edges.length) return;

    let edge = this.edges[this.index];
    this.traverseForward(edge.split("-")[0], edge.split("-")[1]);
    this.index++;
  }

  colorGraphOnceBackward() {
    if (this.index == 0) return;
    this.index--;
    let edge = this.edges[this.index];
    this.traverseBackward(edge.split("-")[0], edge.split("-")[1]);
  }

  resetAllColors() {
    this.index = 0;
    this.cy.nodes().forEach((node) => {
      this.resetNodeColor(node.id());
    });
    this.cy.edges().forEach((edge) => {
      this.resetEdgeColor(edge);
    });
  }
  //operations to be performed when traversing forward
  traverseForward(start, end) {
    //color a node and then traverse the edge to the next node and then color that node and so on
    this.setNodeColor(start);
    if (!this.directed) this.setEdgeColor(this.getEdge(end, start));
    this.setEdgeColor(this.getEdge(start, end));
    this.setNodeColor(end);
  }
  //operations to be performed when traversing backward
  traverseBackward(start, end) {
    //set color back to the original color for the nodes and the edge connecting them
    //this.resetNodeColor(start);
    if (!this.directed) this.resetEdgeColor(this.getEdge(end, start));
    this.resetEdgeColor(this.getEdge(start, end));
    this.resetNodeColor(end);
  }
}
