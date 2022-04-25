class Model{
    constructor(directed=false){
        this.matrix = {}; //adjacency matrix in which edges and nodes are stored
        this.directed = directed;
    }
    
    addNode(node){
        if(this.hasNode(node)) return false;
        this.matrix[node]={};
    }

    addEdge(a,b,edgeObject=1){
        if(this.hasEdge(a,b)) return false;
        //create keys if not present and then get indexes
        if(!this.hasNode(a)) this.addNode(a);
        if(!this.hasNode(b)) this.addNode(b);
        this.matrix[a][b]=edgeObject;
        if(!this.directed) this.matrix[b][a]=edgeObject;
        
    }

    removeEdge(a,b){
        this.matrix[a].delete(b);
    }

    setDirected(directed){
        this.directed = directed;
    }

    reset(){
        this.matrix = {};
    }

    hasNeighbors(node){
        return Object.keys(this.matrix[node]).length > 0;
    }

    getEdgeWeight(a,b){
        return this.matrix[a][b];
    }

    isDirected(){
        return this.directed;
    }

    getNodes(){
        return [...Object.keys(this.matrix)];
    }

    getNeighbors(node){
        console.log('Nieghbours '+this.matrix[node]);
        if(this.hasNeighbors(node)) return [...Object.keys(this.matrix[node])].sort();
        return [];
    }

    hasNode(node){
        return node in this.matrix;
    }

    hasEdge(a,b){
        if (Object.keys(this.matrix).length == 0) return false;
        if(!this.hasNode(a)) return false;
        return b in this.matrix[a];

    }

   
    getMatrix(){
        return this.matrix;
    }
}

