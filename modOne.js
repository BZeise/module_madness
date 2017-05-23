function makeRandom(min, max) {
  return Math.random() * (max - min) + min;
}

module.exports = makeRandom;
