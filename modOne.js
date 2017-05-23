function makeRandom(min, max) {
  var num = Math.random() * (max - min) + min;
  num = parseInt(num);
  return num;
}

// makeRandom(100, 1000000);

module.exports = makeRandom;
