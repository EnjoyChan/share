//Commonjs module
var $ = require('jquery');

module.exports = {
  name: 'enjoy',
  value: 'yourselves'
};

//or
exports.obj = {
  name: 'enjoy',
  value: 'yourselves'
};

//CMD、AMD
define(function(requie, exports, module){
  var $ = require('jquery');

  module.exports = {
    name: 'enjoy',
    value: 'yourselves'
  };
})
