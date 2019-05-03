const { Layer, Network } = require('synaptic');

var inputLayer = new Layer(4);
var hiddenLayer = new Layer(4);
var outputLayer = new Layer(4);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

var network = new Network({
  input: inputLayer,
  hidden: hiddenLayer,
  output: outputLayer
});

// exports

module.exports.network = network;
