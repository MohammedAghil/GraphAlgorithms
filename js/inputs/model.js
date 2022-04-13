class Model{
    constructor(vertices,edges,directed){
        this.matrix = [];
        this.vertices = vertices;
        this.edges = edges;
        this.dictionary = {};
        this.directed = directed;
        this.createMatrix();
    }

    createMatrix(){
        for (let i = 0; i < this.vertices; i++) {
            let temp = [];
            for (let j = 0; j < this.vertices; j++) {
                temp.push(0);
            }
            this.matrix.push(temp);
        }
    }

    reset(){
        this.matrix = Array(vertices).fill(Array(vertices).fill(0));
        this.dictionary = {};
    }

    addEdge(a,b,weight=1){
        //TO DO  : Write check to find if the vertices are more than what is said and if there are more edges than what is said 

        //create keys if not present and then get indexes
        if(!(a in this.dictionary)){
            this.dictionary[a]=Object.keys(this.dictionary).length;
        }   

        if(!(b in this.dictionary)){
            this.dictionary[b]=Object.keys(this.dictionary).length;
        }   

        let i = this.dictionary[a]; //getting location in adjacency matrix
        let j = this.dictionary[b]; //getting location in adjacency matrix
        this.matrix[i][j]=weight;
        
        if(!this.directed) this.matrix[j][i]=weight;  //undirected graph
    }

    removeEdge(a,b){
        let i = this.dictionary[a]; //getting location in adjacency matrix
        let j = this.dictionary[b]; //getting location in adjacency matrix
        this.matrix[i][j]=0;
    }

    getMatrix(){
        return this.matrix;
    }
}

module.exports = Model;