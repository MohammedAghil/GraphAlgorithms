class Step{
    constructor(visited,queue,currentNode,adjacentNode,step,edges,edge){
        this.edges = edges;
        this.visited = visited;
        this.queue = queue;
        this.currentNode = currentNode;
        this.adjacentNode = adjacentNode;
        this.edge = edge;
        this.step = step;
    }

    getVisited(){
        return this.visited;
    }

    getQueue(){
        return this.queue;
    }

    getCurrentNode(){
        return this.currentNode;
    }

    getAdjacentNode(){
        return this.adjacentNode;
    }

    getStep(){
        return this.step;
    }

    getEdges(){
        return this.edges;
    }

    getEdge(){
        return this.edge;
    }

    getData(){
        return {
            visited: this.visited,
            queue: this.queue,
            currentNode: this.currentNode,
            adjacentNode: this.adjacentNode,
            step: this.step,
            edges: this.edges,
            edge: this.edge
        }
    }
}