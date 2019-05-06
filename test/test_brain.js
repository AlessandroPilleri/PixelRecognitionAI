const brain = require('brain.js')

const config = {
  binaryThresh: 0.5,
  hiddenLayers: [4],
  activation: 'sigmoid',
  leakyReluAlpha: 0.01
};

const net = new brain.NeuralNetwork(config);

net.train([
  {input: [1,1,1,1], output: [1,0.5,0.5,0.5]},
  {input: [0,0,0,0], output: [0,0.5,0.5,0.5]},
  {input: [1,0,0,1], output: [0.5,1,0.5,0.5]},
  {input: [0,1,1,0], output: [0.5,0,0.5,0.5]},
  {input: [1,0,1,0], output: [0.5,0.5,1,0.5]},
  {input: [0,1,0,1], output: [0.5,0.5,0,0.5]},
  {input: [0,0,1,1], output: [0.5,0.5,0.5,1]},
  {input: [1,1,0,0], output: [0.5,0.5,0.5,0]}
])

console.log(net.run([1,1,1,1]));
console.log(net.run([0,0,0,0]));
console.log(net.run([1,0,0,1]));
console.log(net.run([0,1,1,0]));
console.log(net.run([1,0,1,0]));
console.log(net.run([0,1,0,1]));
console.log(net.run([0,0,1,1]));
console.log(net.run([1,1,0,0]));
