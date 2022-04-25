function runAlgorithm(){
        //Defined Algorithm with thier instances
        let algorithmsMapOfNamesWithInstances = {
            'BFS': bfsInstance,
            'DFS': dfsInstance,
            'Dijkstra': dijkstraInstance,
        };

        graphColorHelperInstance.resetAllColors();
        let selectedAlgorithm = document.getElementById("selectAlgorithm").value;
        let startNode = document.getElementById("selectStartNode").value;
        let endNode = document.getElementById("selectEndNode").value;
        console.log(startNode,endNode);

        if(startNode == endNode){
            alert("Start and End nodes are the same");
            return;
        }
        let selectedAlgorithmInstance = algorithmsMapOfNamesWithInstances[selectedAlgorithm];
        if(selectedAlgorithmInstance != null){
        selectedAlgorithmInstance.reset();
        selectedAlgorithmInstance.setStartAndEndNode(startNode,endNode);
        let data = selectedAlgorithmInstance.run().data;
        graphColorHelperInstance.setEdges(data[data.length-1].edges);
        console.log(graphColorHelperInstance.edges);

        let extra_text = "";
        if(data[0].distance){
            extra_text = 'The Shortest Distance Is : ' + data[0].distance;
            console.log(extra_text);
        }   

        setInfoTextAndStyle(startNode,endNode,selectedAlgorithmInstance.finished,extra_text);
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