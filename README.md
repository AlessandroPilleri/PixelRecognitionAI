# PixelRecognitionAI

Artificial intelligence for recognize shapes of a 2x2 pixel image using NodeJS.

**Synaptic**

The module Synaptic.js was used to create and train the artificial neural network.

**Jimp**

The module Jimp.js was used to get the rgba information from each image pixel.

# Use

The image used must be in greyscale, we haven't implemented any other color so far. This code only tells if there's a shape close to black or white.
```
> node main.js filename
```

We created a test with each possible shape recognizable.

```
> cd test
> node test_network.js
```
