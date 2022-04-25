function getFormData(){
    let graphInputText = document.getElementById('graphInputText');
    return graphInputText.value;
  }

function extractGraphConnectionsFromInputTextFormData(graphInputText){
    let graphConnections = [];
    let lines = graphInputText.split('\n');
    for(const element of lines){
      let line = element;
      let lineSplit = line.split(' ');
      let from = lineSplit[0];
      let to = lineSplit[1];
      let weight = lineSplit[2];
      graphConnections.push({
        from: from,
        to: to,
        weight: weight
      });
    }
    return graphConnections;
}


function setInfoTextAndStyle(startNode,endNode,finished){
  if(finished){
    //remove class bg-info to make it green
    document.getElementById("infoText").classList.remove("bg-info");
    document.getElementById("infoText").classList.remove("bg-danger");
    document.getElementById("infoText").classList.add("bg-success");
    document.getElementById("infoText").innerHTML = "There is a path from Source Node : "+startNode+" to Target Node : "+endNode;
}
else{
  //remove class bg-success to make it red
  document.getElementById("infoText").classList.remove("bg-info");
  document.getElementById("infoText").classList.remove("bg-success");
  document.getElementById("infoText").classList.add("bg-danger");
  document.getElementById("infoText").innerHTML = "There is No path from Source Node : "+startNode+" to Target Node : "+endNode;
}
}
