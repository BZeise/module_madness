function convert(number) {
  // var num = '$' + number.toFixed(2);
  return number.toLocaleString('en-US', {style: 'currency', currency:'USD'});
}

module.exports = convert;
