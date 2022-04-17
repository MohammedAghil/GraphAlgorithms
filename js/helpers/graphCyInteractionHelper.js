//this class helps to interact with the cy elements in the graph such as getting a node when given its id, getting an edge when given its id, etc.
class GraphCyInteractionHelper{
    constructor(cy){
        this.cy = cy;
    }

    getNodeById(id){
        return this.cy.$id(id);
    }

    getEdge(from,to){
       return this.cy.$id(from+to);
    }

    getEdgeById(id){
        return this.cy.$id(id);
    }
}