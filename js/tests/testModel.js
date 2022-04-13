const Model = require('../inputs/model');

const modelInstance = new Model(3,2,true);

modelInstance.addEdge(1000,250);
modelInstance.addEdge(250,300);
//modelInstance.addEdge('B','A');

console.log(modelInstance.getMatrix());
console.log(modelInstance.dictionary);