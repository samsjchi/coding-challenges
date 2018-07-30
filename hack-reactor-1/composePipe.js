/*
Name: Compose, Pipe

Link: https://challenge.makerpass.com/c/1deb22b2c36fdf643ee197742469639c

Description:
Implement the functions compose and pipe.

Compose:
Compose should return a function that is the composition of a list of functions of arbitrary length. Each function is called on the return value of the function that follows.

You can think of compose as moving right to left through its arguments.

Example:
var greet = function(name) { return 'hi: ' + name; };
var exclaim = function(statement) { return statement.toUpperCase() + '!'; };

var welcome = compose(greet, exclaim);
welcome('phillip'); // => 'hi: PHILLIP!'
---------------------------------------------------------------------
Pipe:
Pipe composes a series of functions and returns the resulting function. Each function is called on the return value of the preceding function.

You can think of pipe as moving left to right through its arguments.

Example:
var add2 = function(number) { return number + 2; };
var multiplyBy3 = function(number) { return number * 3; };

pipe(add2, multiplyBy3)(5); // => 21
pipe(add2, multiplyBy3, multiplyBy3)(5); // => 63

HINT: You should use the functions reduce() and reduceRight() in your solutions.
*/

// ES6 Solution:
const compose = (...args) => {
  return function(val) {
    return args.reduceRight((prev, func) => func(prev), val);
  };
}

const pipe = (...args) => {
  return function(val) {
    return args.reduce((prev, func) => func(prev), val);
  };
}

// ES5 Solution:
var compose = function() {
  var funcsToCompose = arguments;

  return function() {
    var index = funcsToCompose.length - 1;
    var result = funcsToCompose[index].apply(this, arguments);

    while(index--) {
      result = funcsToCompose[index].call(this, result);
    }
    return result;
  }
}

var pipe = function() {
  var args = arguments;

  return function(result) {
    for(var i = 0; i < args.length; i++) {
      var func = args[i];
      result = func(result);
    }
    return result;
  }
}
