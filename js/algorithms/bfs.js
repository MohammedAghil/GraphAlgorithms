class BFS{
    constructor(startNode,endNode,graphModel,graphColorHelper){
        this.startNode = startNode;
        this.endNode = endNode;
        this.visited = new Set();
        this. queue = [];
        this.graph = graphModel;

        this.queue.push(startNode);
        this.visited.add(startNode);
        this.previousNode = null;
        this.currentNode = startNode;
        this.graphColorHelper = graphColorHelper;

    }

    //BFS algorithm
    //1. Create a queue
    //2. Enqueue the start node
    //3. Mark the start node as visited
    //4. Dequeue the first node in the queue
    //5. Check if the dequeued node is the end node
    //6. If yes, return the path
    //7. If not, enqueue all the adjacent nodes to the dequeued node
    //8. Mark the dequeued node as visited
    //9. Repeat steps 3-8 until the queue is empty
    //10. Return null if the end node is not found
    runOnce(){
        if(this.queue.length > 0){
            console.log('Queue: ' + this.queue);
            this.currentNode = this.queue.shift();
            console.log('Visited: ' + [...this.visited]);
            console.log('Current ' + this.currentNode);
            console.log('Previous ' + this.previousNode);
            if(this.currentNode == this.endNode){
                console.log('Found the end node');
            }
            let adjacentNodes = this.graph.getNeighbors(this.currentNode);
            console.log('Adjacent nodes: ' + [...adjacentNodes]);
            for(let adjacentNode of adjacentNodes){
                console.log('Adjacent node: ' + adjacentNode);
                console.log('Visited: ' + [...this.visited]);
                if(!(this.visited.has(adjacentNode))){
                    console.log(adjacentNode+' not present so pushing');
                    this.queue.push(adjacentNode);
                    this.visited.add(adjacentNode);
                }
                else{
                    console.log('present');
                }
            }
            if(this.previousNode != null){
                console.log('adding edge from ' + this.previousNode + ' to ' + this.currentNode);
                this.graphColorHelper.traverseForward(this.previousNode,this.currentNode);
            }
            this.previousNode = this.currentNode;
        }
        else{
            console.log('Finished BFS');
        }
    }

}