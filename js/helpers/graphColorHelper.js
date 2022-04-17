class GraphColorHelper{
    constructor(nodeColor,edgeColor,GraphCyInteractionHelper){
        this.nodeColor = nodeColor;
        this.edgeColor = edgeColor;
        this.GraphCyInteractionHelper = GraphCyInteractionHelper;
    }

    setNodeColor(node){ //set the color of a node
        this.GraphCyInteractionHelper.getNodeById(node).style('background-color', this.nodeColor);
    }

    setEdgeColor(edge){ //set the color of an edge
        console.log('edge id '+edge.id());
        edge.style('line-color', '#ff0000');
    }

    resetEdgeColor(edge){ //reset the color of an edge to the original color
        this.GraphCyInteractionHelper.getEdgeById(edge).style('line-color', '#666666');
    }

    resetNodeColor(node){ //reset the color of a node to the original color
        this.GraphCyInteractionHelper.getNodeById(node).style('background-color', '#666666');
    }

    traverseForward(start,end){ //color a node and then traverse the edge to the next node and then color that node and so on
        this.setNodeColor(start);
        this.setEdgeColor(this.GraphCyInteractionHelper.getEdge(start,end));
        this.setNodeColor(end);
    }

    traverseBackward(start,end){ //set color back to the original color for the nodes and the edge connecting them
        this.resetNodeColor(start);
        this.resetEdgeColor(this.GraphCyInteractionHelper.getEdge(start,end));
        this.resetNodeColor(end);
    }


}