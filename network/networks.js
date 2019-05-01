const { Layer, Network } = require('synaptic');

var inputLayer = new Layer(2);
var outputLayer = new Layer(1);

var finalInput = new Layer(2);
var finalOutput = new Layer(1);

inputLayer.project(outputLayer);
finalInput.project(finalOutput)

var redNetwork = new Network({
  input: inputLayer,
  output: outputLayer
});

var greenNetwork = new Network({
  input: inputLayer,
  output: outputLayer
});

var orangeNetwork = new Network({
  input: inputLayer,
  output: outputLayer
});

var violetNetwork = new Network({
  input: inputLayer,
  output: outputLayer
});

var solidNetwork = new Network ({
  input: finalInput,
  output: finalOutput
})

var verticalNetwork = new Network ({
  input: finalInput,
  output: finalOutput
})

var diagonalNetwork = new Network ({
  input: finalInput,
  output: finalOutput
})

var horizontalNetwork = new Network ({
  input: finalInput,
  output: finalOutput
})

// exports

module.exports.redNetwork = redNetwork;
module.exports.greenNetwork = greenNetwork;
module.exports.orangeNetwork = orangeNetwork;
module.exports.violetNetwork = violetNetwork;
module.exports.solidNetwork = solidNetwork;
module.exports.verticalNetwork = verticalNetwork;
module.exports.diagonalNetwork = diagonalNetwork;
module.exports.horizontalNetwork = horizontalNetwork;
