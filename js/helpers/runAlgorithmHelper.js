function runAlgorithm(){
        graphColorHelperInstance.resetAllColors();
        let selectedAlgorithm = document.getElementById("selectAlgorithm").value;
        let startNode = document.getElementById("selectStartNode").value;
        let endNode = document.getElementById("selectEndNode").value;
        console.log(startNode,endNode);
        
        if(selectedAlgorithm == "BFS"){
          console.log("BFS");
          bfsInstance.reset();
          bfsInstance.setStartAndEndNode(startNode,endNode);
          let data = bfsInstance.run().data;
          graphColorHelperInstance.setEdges(data[data.length-1].edges);
          console.log(graphColorHelperInstance.edges);
        }
        else if(selectedAlgorithm == "DFS"){
          console.log("DFS");
          dfsInstance.reset();
          dfsInstance.setStartAndEndNode(startNode,endNode);
          let data = dfsInstance.run().data;
          graphColorHelperInstance.setEdges(data[data.length-1].edges);
          console.log(graphColorHelperInstance.edges);
        }
        else{
          console.log("No Algorithm Selected");
        }
}
  
function colorGraphOnceForward(){
    graphColorHelperInstance.colorGraphOnceForward();
}
  
function colorGraphOnceBackward(){
    graphColorHelperInstance.colorGraphOnceBackward();
}