class DFS{
    //same as BFS but with Depth first Search Traversal
    constructor(graphModel){
        this.startNode = null;
        this.endNode = null;
        this.visited = new Set();
        this. stack = [];
        this.step = 0;
        this.graph = graphModel;
        this.edges = [];
        this.currentNode = null;
        this.stepsExport = [];
    }

    setStartAndEndNode(startNode,endNode){
        this.startNode = startNode;
        this.endNode = endNode;
        this.stack.push(startNode);
        this.visited.add(startNode);
        this.currentNode = startNode;
        this.finished = false;
    }

    recursiveRun(currentNode){
        if(currentNode == this.endNode){
            this.finished=true;
        }
        this.graph.getNeighbors(currentNode).forEach(neighbor => {
            if(this.finished) return;
            if(!this.visited.has(neighbor)){
                this.visited.add(neighbor);
                this.edges.push(currentNode+'-'+neighbor);
                this.stepsExport.push({
                    currentNode: currentNode,
                    adjacentNode: neighbor,
                    step: this.step,
                    visited: [...this.visited],
                    stack: [...this.stack],
                    edge: currentNode+'-'+neighbor,
                    edges:[...this.edges],
                });
            this.recursiveRun(neighbor);
            }
    });

    }

    run(){
        this.recursiveRun(this.startNode);
        return {data:this.stepsExport,finished:this.finished};
    }


    
        
}