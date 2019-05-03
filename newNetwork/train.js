function train(network, callback) {

  var learningRate = .3;
  var n = 1000000;
  var percentRate = n / 100;

  for (var i = 0; i < n; i++) {

    if (i % percentRate == 0) {
      console.log(i * 100 / n + "%");
    }

    network.network.activate([0,0,0,0]);
    network.network.propagate(learningRate, [1,0,0,0]);

    network.network.activate([1,1,1,1]);
    network.network.propagate(learningRate, [1,0,0,0]);

    network.network.activate([0,1,1,0]);
    network.network.propagate(learningRate, [0,1,0,0]);

    network.network.activate([1,0,0,1]);
    network.network.propagate(learningRate, [0,1,0,0]);

    network.network.activate([1,0,1,0]);
    network.network.propagate(learningRate, [0,0,1,0]);

    network.network.activate([0,1,0,1]);
    network.network.propagate(learningRate, [0,0,1,0]);

    network.network.activate([1,1,0,0]);
    network.network.propagate(learningRate, [0,0,0,1]);

    network.network.activate([0,0,1,1]);
    network.network.propagate(learningRate, [0,0,0,1]);

  }

  callback(network)

}

module.exports.train = train;
