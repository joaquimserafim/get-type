var is = require('core-util-is');
var isJSON = require('is-json');


module.exports = new Type();


function Type () {
  if (!(this instanceof Type)) return new Type();

  // put isJSON in first
  this._is = ['isJSON'];
  this.isJSON = isJSON;

  // lets make use of core-util-is
  Object.keys(is).forEach(function (fn) {
    this[fn] = is[fn];
    this._is.push(fn);
  }, this);
}

Type.prototype.get = function (op) {
  for (var i = 0; i < this._is.length; i++) {
    if (this[this._is[i]](op))
      return this._is[i].replace('is', '').toLowerCase();
  }
};

Type.prototype.convert = function (value) {
  return value;
};
