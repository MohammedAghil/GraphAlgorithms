function getFormData(){
    let graphInputText = document.getElementById('graphInputText');
    return graphInputText.value;
  }

function extractGraphConnectionsFromInputTextFormData(graphInputText){
    let graphConnections = [];
    let lines = graphInputText.split('\n');
    for(const line of lines){
      if(line.trim()==''){
        continue;
      }
      let lineSplit = line.split(' ');
      if(lineSplit.length!=3){
        console.log("Invalid line : "+line);
        continue;
      }
      let from = lineSplit[0];
      let to = lineSplit[1];
      let weight = lineSplit[2];
      graphConnections.push({
        from: from,
        to: to,
        weight: parseInt(weight)
      });
    }
    return graphConnections;
}


function setInfoTextAndStyle(startNode,endNode,finished,extra_text){
  document.getElementById("infoText").classList.remove("bg-info");
  document.getElementById("infoText").classList.remove("bg-danger");
  document.getElementById("infoText").classList.remove("bg-success");
  if(finished){// make it green
    document.getElementById("infoText").classList.add("bg-success");
    document.getElementById("infoText").innerHTML = "There is a path from Source Node : "+startNode+" to Target Node : "+endNode +"<br>"+extra_text;
}
else{//  make it red
  document.getElementById("infoText").classList.add("bg-danger");
  document.getElementById("infoText").innerHTML = "There is No path from Source Node : "+startNode+" to Target Node : "+endNode +"<br>"+extra_text;
}
}
