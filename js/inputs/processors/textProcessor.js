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