var $ = require('jquery');
var Person = require('./modules/Person');

alert('ABC 123');

var john = new Person('John Doe', 'Blue');
john.greet();

var jane = new Person('Jane Smith', 'Green');
jane.greet();

$('h1').remove();