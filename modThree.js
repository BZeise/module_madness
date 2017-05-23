var http = require('http');
var random = require('./modOne');
var converter = require('./modTwo');

exports.passMod = function() {
  return converter(random(100, 1000000));
}

exports.balance = function() {
  return 'Account balance: \n'
}
