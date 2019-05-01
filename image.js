const jimp = require('jimp')

const IMAGES_PATH = 'images/';
input = [];

function getImage (filename, callback) {
  jimp.read(IMAGES_PATH + filename, function (err, image) {
    if (err) throw err;
    i = [];
    i.push(jimp.intToRGBA(image.getPixelColor(0,0)))
    i.push(jimp.intToRGBA(image.getPixelColor(0,1)))
    i.push(jimp.intToRGBA(image.getPixelColor(1,0)))
    i.push(jimp.intToRGBA(image.getPixelColor(1,1)))

    input[0] = parseRGBA(i[0]);
    input[1] = parseRGBA(i[2]);
    input[2] = parseRGBA(i[3]);
    input[3] = parseRGBA(i[1]);

    callback(input)
  })
}

function parseRGBA (input) {
  // 0,0,0 => black => -1
  // 128,128,128 => grey => 0
  // 255,255,255 => white => 1

  // 0 : -1 = 255 : 1
  // (255 : 1 = color : x)

  if (input.r != input.g && input.r != input.b) {
    console.error("Pixels color is not in greyscale");
  }
  else {
    val = Number(input.r * 1 / 255).toFixed(2)
    console.log(val)
    return val;
  }
}

module.exports.getImage = getImage;
