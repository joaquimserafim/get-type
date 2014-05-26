var is = require('core-util-is');
var isJSON = require('is-json');


module.exports = new Type();


function Type () {
  // put isJSON in first
  this._is = ['isJSON'];
  this.isJSON = isJSON;

  // lets make use of core-util-is
  Object.keys(is).forEach(function (fn) {
    // lets jump isobject & isnullorundefined
    if (['isObject', 'isNullOrUndefined'].indexOf(fn) !== -1) return;
    this[fn] = is[fn];
    this._is.push(fn);
  }, this);

  // isObject in last because to get Regex, Date & Error
  this._is.push('isObject', 'isNullOrUndefined');
  this.isObject = is.isObject;
  // NullOrUndefined is only to be used directly
  // with type.isNullOrUndefined
  this.isNullOrUndefined = is.isNullOrUndefined;
}

Type.prototype.get = function (op) {
  for (var i = 0; i < this._is.length; i++) {
    if (this[this._is[i]](op))
      return this._is[i].replace('is', '').toLowerCase();
  }
};
