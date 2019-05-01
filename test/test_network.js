var networks = require('../network/networks.js')
var train = require('../network/train.js')

console.log(networks)

input = [
  [0.5,0.5,0.5,0.5]
]

train.train(networks, function (trainedNetwork) {
  input.forEach(function (element) {

    red = trainedNetwork.redNetwork.activate([element[0], element[3]]);
    green = trainedNetwork.greenNetwork.activate([element[1], element[2]]);
    orange = trainedNetwork.orangeNetwork.activate([element[0], element[3]]);
    violet = trainedNetwork.violetNetwork.activate([element[1], element[2]]);

    console.log('input = ' + element);

    solid = trainedNetwork.solidNetwork.activate([red, green]);
    vertical = trainedNetwork.verticalNetwork.activate([red, green])
    diagonal = trainedNetwork.diagonalNetwork.activate([orange, violet])
    horizontal = trainedNetwork.horizontalNetwork.activate([orange, violet])

    console.log(solid);
    checkResult(solid, function (x) {
      if (!x && x != false) {
        console.log('It\'s NOT solid.');
      } else {
        if (x == false) {
          console.log('It\'s solid (inverted).');
        } else {
          console.log('It\'s solid.');
        }
      }
    })
    console.log(vertical);
    checkResult(vertical, function (x) {
      if (!x && x != false) {
        console.log('It\'s NOT vertical.');
      } else {
        if (x == false) {
          console.log('It\'s vertical (inverted).');
        } else {
          console.log('It\'s vertical.');
        }
      }
    })
    console.log(diagonal);
    checkResult(diagonal, function (x) {
      if (!x && x != false) {
        console.log('It\'s NOT diagonal.');
      } else {
        if (x == false) {
          console.log('It\'s diagonal (inverted).');
        } else {
          console.log('It\'s diagonal.');
        }
      }
    })
    console.log(horizontal);
    checkResult(horizontal, function (x) {
      if (!x && x != false) {
        console.log('It\'s NOT horizontal.');
      } else {
        if (x == false) {
          console.log('It\'s horizontal (inverted).');
        } else {
          console.log('It\'s horizontal.');
        }
      }
    })

    console.log('\n\n');
  })
})

function checkResult(result, callback) {
  if (result >= 0 && result <= 0.1) {
    callback(false)
  }
  if (result > 0.1 && result < 0.9) {
    callback(null)
  }
  if (result >= 0.9 && result <= 1) {
    callback(true)
  }
}
