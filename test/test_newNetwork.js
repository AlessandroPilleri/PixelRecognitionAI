var network = require('../newNetwork/networks.js')
var train = require('../newNetwork/train.js')

console.log(network);

input = [
  [1,1,1,1],
  [0,0,0,0],
  [1,1,0,0],
  [0,0,1,1],
  [1,0,1,0],
  [0,1,0,1],
  [1,0,0,1],
  [0,1,1,0]
]

train.train(network, function (trainedNetwork) {
  input.forEach(function (element) {

    console.log('input = ' + element);

    result = trainedNetwork.network.activate(element);
    console.log(result);

    console.log('\n\n');

  })
})
