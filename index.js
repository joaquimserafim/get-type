var is = require('core-util-is');
is.isJSON = require('is-json');


module.exports = new Type();


function Type () {
  // lets make use of core-util-is
  Object.keys(is).forEach(function (fn) {
    this[fn] = is[fn];
  }, this);
}

Type.prototype.get = function (op) {
  if (this.isPrimitive(op)) {
    return this.isNull(op) ? 'null' :
      this.isJSON(op) ? 'json' :
      this.isBoolean(op) ? 'boolean' :
      this.isNumber(op) ? 'number' :
      this.isSymbol(op) ? 'symbol' :
      this.isString(op) ? 'string' :
      this.isUndefined(op) ? 'undefined' : 'unknown';
  }

  if (this.isObject(op)) {
    return this.isArray(op) ? 'array' :
      this.isRegExp(op) ? 'regexp' :
      this.isDate(op) ? 'date' :
      this.isError(op) ? 'error' :
      this.isBuffer(op) ? 'buffer' : 'object';
  }

  if (this.isFunction(op)) return 'function';
};
