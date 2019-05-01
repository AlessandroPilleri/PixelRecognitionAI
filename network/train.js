function train(network, callback) {

  var learningRate = .3;

  for (var i = 0; i < 20000; i++) {

    // red network
    network.redNetwork.activate([1,1]);
    network.redNetwork.propagate(learningRate, [1]);

    network.redNetwork.activate([0.5,0.5]);
    network.redNetwork.propagate(learningRate, [0.5]);

    network.redNetwork.activate([0,0]);
    network.redNetwork.propagate(learningRate, [0]);

    network.redNetwork.activate([1,0]);
    network.redNetwork.propagate(learningRate, [0.5]);

    network.redNetwork.activate([0,1]);
    network.redNetwork.propagate(learningRate, [0.5]);

    // green network
    network.greenNetwork.activate([1,1]);
    network.greenNetwork.propagate(learningRate, [1]);

    network.greenNetwork.activate([0.5,0.5]);
    network.greenNetwork.propagate(learningRate, [0.5]);

    network.greenNetwork.activate([0,0]);
    network.greenNetwork.propagate(learningRate, [0]);

    network.greenNetwork.activate([1,0]);
    network.greenNetwork.propagate(learningRate, [0.5]);

    network.greenNetwork.activate([0,1]);
    network.greenNetwork.propagate(learningRate, [0.5]);

    // orange network
    network.orangeNetwork.activate([1,1]);
    network.orangeNetwork.propagate(learningRate, [0.5]);

    network.orangeNetwork.activate([0.5,0.5]);
    network.orangeNetwork.propagate(learningRate, [0.5]);

    network.orangeNetwork.activate([0,0]);
    network.orangeNetwork.propagate(learningRate, [0.5]);

    network.orangeNetwork.activate([1,0]);
    network.orangeNetwork.propagate(learningRate, [1]);

    network.orangeNetwork.activate([0,1]);
    network.orangeNetwork.propagate(learningRate, [0]);

    // violet network
    network.violetNetwork.activate([1,1]);
    network.violetNetwork.propagate(learningRate, [0.5]);

    network.violetNetwork.activate([0.5,0.5]);
    network.violetNetwork.propagate(learningRate, [0.5]);

    network.violetNetwork.activate([0,0]);
    network.violetNetwork.propagate(learningRate, [0.5]);

    network.violetNetwork.activate([1,0]);
    network.violetNetwork.propagate(learningRate, [1]);

    network.violetNetwork.activate([0,1]);
    network.violetNetwork.propagate(learningRate, [0]);

    // solid network
    network.solidNetwork.activate([1,1]);
    network.solidNetwork.propagate(learningRate, [1]);

    network.solidNetwork.activate([0.5,0.5]);
    network.solidNetwork.propagate(learningRate, [0.5]);

    network.solidNetwork.activate([0,0]);
    network.solidNetwork.propagate(learningRate, [0]);

    network.solidNetwork.activate([1,0]);
    network.solidNetwork.propagate(learningRate, [0.5]);

    network.solidNetwork.activate([0,1]);
    network.solidNetwork.propagate(learningRate, [0.5]);

    // vertical networks
    network.verticalNetwork.activate([1,1]);
    network.verticalNetwork.propagate(learningRate, [0.5]);

    network.verticalNetwork.activate([0.5,0.5]);
    network.verticalNetwork.propagate(learningRate, [0.5]);

    network.verticalNetwork.activate([0,0]);
    network.verticalNetwork.propagate(learningRate, [0.5]);

    network.verticalNetwork.activate([1,0]);
    network.verticalNetwork.propagate(learningRate, [0]);

    network.verticalNetwork.activate([0,1]);
    network.verticalNetwork.propagate(learningRate, [1]);

    // diagonal networks
    network.diagonalNetwork.activate([1,1]);
    network.diagonalNetwork.propagate(learningRate, [0.5]);

    network.diagonalNetwork.activate([0.5,0.5]);
    network.diagonalNetwork.propagate(learningRate, [0.5]);

    network.diagonalNetwork.activate([0,0]);
    network.diagonalNetwork.propagate(learningRate, [0.5]);

    network.diagonalNetwork.activate([1,0]);
    network.diagonalNetwork.propagate(learningRate, [1]);

    network.diagonalNetwork.activate([0,1]);
    network.diagonalNetwork.propagate(learningRate, [0]);

    // horizontal network
    network.horizontalNetwork.activate([1,1]);
    network.horizontalNetwork.propagate(learningRate, [0]);

    network.horizontalNetwork.activate([0.5,0.5]);
    network.horizontalNetwork.propagate(learningRate, [0.5]);

    network.horizontalNetwork.activate([0,0]);
    network.horizontalNetwork.propagate(learningRate, [1]);

    network.horizontalNetwork.activate([1,0]);
    network.horizontalNetwork.propagate(learningRate, [0.5]);

    network.horizontalNetwork.activate([0,1]);
    network.horizontalNetwork.propagate(learningRate, [0.5]);

  }

  callback(network)
    /*// white solid
    network.activate([1,1,1,1]);
    network.propagate(learningRate, [1,0,0,0,0,0,0,0]);

    // black solid
    network.activate([0,0,0,0]);
    network.propagate(learningRate, [0,1,0,0,0,0,0,0]);

    // white vertical
    network.activate([0,0,1,1]);
    network.propagate(learningRate, [0,0,1,0,0,0,0,0]);

    // black vertical
    network.activate([1,1,0,0]);
    network.propagate(learningRate, [0,0,0,1,0,0,0,0]);

    // white diagonal
    network.activate([1,0,0,1]);
    network.propagate(learningRate, [0,0,0,0,1,0,0,0]);

    // black diagonal
    network.activate([0,1,1,0]);
    network.propagate(learningRate, [0,0,0,0,0,1,0,0]);

    // white horizontal
    network.activate([1,0,1,0]);
    network.propagate(learningRate, [0,0,0,0,0,0,1,0]);

    // black horizontal
    network.activate([0,1,0,1]);
    network.propagate(learningRate, [0,0,0,0,0,0,0,1]);
  */
}

// exports

module.exports.train = train;
