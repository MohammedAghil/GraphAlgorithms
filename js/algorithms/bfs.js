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

    }

    setStartAndEndNode(startNode,endNode){
        this.startNode = startNode;
        this.endNode = endNode;
        this.queue.push(startNode);
        this.visited.add(startNode);
        this.previousNode = null;
        this.currentNode = startNode;
    }


    run(){
        this.step+=1;
        console.log('STEP : '+this.step);
        while(this.queue.length > 0){
            console.log('Queue: ' + this.queue);
            this.currentNode = this.queue.shift();
            console.log('Visited: ' + [...this.visited]);
            console.log('Current ' + this.currentNode);
            console.log('Previous ' + this.previousNode);
            if(this.currentNode == this.endNode){
                console.log('Found the end node');
                return {data:this.stepsExport,finished:true};
            }
            let adjacentNodes = this.graph.getNeighbors(this.currentNode);
            console.log('Adjacent nodes: ' + [...adjacentNodes]);
            for(let adjacentNode of adjacentNodes){
                console.log('Adjacent node: ' + adjacentNode);
                console.log('Visited: ' + [...this.visited]);
                if(!(this.visited.has(adjacentNode))){
                    this.edges.push(this.currentNode+'-'+adjacentNode);
                    console.log('adding Edge' + this.currentNode + '-' + adjacentNode);
                    //this.graphColorHelper.traverseForward(this.currentNode,adjacentNode);
                    this.stepsExport.push({
                        currentNode: this.currentNode,
                        adjacentNode: adjacentNode,
                        step: this.step,
                        visited: [...this.visited],
                        queue: [...this.queue],
                        edge: this.currentNode+'-'+adjacentNode,
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
        return {data:this.stepsExport,finished:false};
    }

}