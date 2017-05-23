function convert(number) {
  // var num = '$' + number.toFixed(2);
  return '$' + number.toLocaleString();
}

module.exports = convert;
