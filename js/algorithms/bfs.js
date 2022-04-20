class BFS{
    constructor(graphModel){
        this.startNode = null;
        this.endNode = null;
        this.visited = new Set();
        this. queue = [];
        this.step = 0;
        this.graph = graphModel;
        this.edges = [];
        this.stepsExport = [];
        this.finished = false;

    }
    reset(){
        this.startNode = null;
        this.endNode = null;
        this.visited = new Set();
        this. queue = [];
        this.step = 0;
        this.edges = [];
        this.stepsExport = [];
        this.finished = false;
    }

    setStartAndEndNode(startNode,endNode){
        this.startNode = startNode;
        this.endNode = endNode;
        this.queue.push(startNode);
        this.visited.add(startNode);
        this.previousNode = null;
    }


    run(){
        this.step+=1;
        console.log('STEP : '+this.step);
        while(this.queue.length > 0 && !this.finished){
            console.log('Queue: ' + this.queue);
            let currentNode = this.queue.shift();
            console.log('Visited: ' + [...this.visited]);
            console.log('edges: ' + this.edges);
            console.log('Current ' + currentNode);
            if(currentNode == this.endNode){
                console.log('Found the end node');
                this.finished = true;
                break;
            }
            let adjacentNodes = this.graph.getNeighbors(currentNode);
            console.log('Adjacent nodes: ' + [...adjacentNodes]);
            for(let adjacentNode of adjacentNodes){
                console.log('Adjacent node: ' + adjacentNode);
                console.log('Visited: ' + [...this.visited]);
                if(!(this.visited.has(adjacentNode))){
                    this.edges.push(currentNode+'-'+adjacentNode);
                    console.log('adding Edge' + currentNode + '-' + adjacentNode);
                    //this.graphColorHelper.traverseForward(this.currentNode,adjacentNode);
                    this.stepsExport.push({
                        currentNode: currentNode,
                        adjacentNode: adjacentNode,
                        step: this.step,
                        visited: [...this.visited],
                        queue: [...this.queue],
                        edge: currentNode+'-'+adjacentNode,
                        edges:[...this.edges],
                        finished:false
                    });
                    console.log(adjacentNode+' not present so pushing');
                    this.queue.push(adjacentNode);
                    this.visited.add(adjacentNode);
                }

                else{
                    console.log('present in visited already');
                }
            }
        }

        return {data:this.stepsExport,finished:this.finished};
    }

}