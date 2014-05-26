


var type = require('./');


console.log(type);
console.log();

console.log(type.get('121212.1212'));
console.log(type.get('test'));
console.log(type.get(1212121212));
console.log(type.get(null));
console.log(type.get());
console.log(type.get('{"a": 1212, "b": "Hello World"}'));

console.log();

console.log(type.convert('121212.1212'));
console.log(type.convert('test'));
console.log(type.convert(1212121212));
console.log(type.convert(null));
console.log(type.convert());
console.log(type.convert('{"a": 1212, "b": "Hello World"}'));



