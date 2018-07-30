/*
Name: Function Bind

Link: https://challenge.makerpass.com/c/f173d3f8244fc5886176911d6ce842d1

Description:
Implement the function ‘bind’, which accepts a function and a context as arguments.
The context argument should override an existing context that the function is defined in.
Your bind function should return the passed in function.

For example, if we have the following object:

  var alice = {
    name: 'alice',
    shout: function () {
      alert('here comes' + ' ' + this.name);
    }
  };

  alice.shout() //=> 'here comes alice'

If you use your bind function with the context { name: 'bob' }, as is shown here:

  boundShout = bind(alice.shout, { name: 'bob' })

Then calling boundShout() will alert 'here comes bob'

The following example should also work in the following way once your function is implemented:

  var func = function(a, b){ return a + b };
  var boundFunc = bind(func, null, 'diet');

  boundFunc('coke'); //=> 'dietcoke'

Once you have finished that, implement the function ‘bind’ as a method of the Function.prototype object. This will be similar to your first solution, but should be able to be used in the following way:

  var alice = {
    name: 'alice',
    shout: function () {
      alert(this.name);
    }
  };

  var boundShout = alice.shout.bind(alice);
  boundShout(); // alerts 'alice'

  boundShout = alice.shout.bind({ name: 'bob' });
  boundShout(); // alerts 'bob'

DO NOT use the native bind() function in your solutions. You may use the functions call() and apply().
*/

var bind = function(func, context){
  // Create an array containing all arguments passed in to bind
  var args = Array.prototype.slice.call(arguments, 2);

  // Return new function that applies context and args to original function
  return function(){
    // Create another array to combine arguments passed in to bind with
    // any arguments passed in to new bound function
    var allArgs = args.concat(Array.prototype.slice.call(arguments));
    return func.apply(context, allArgs);
  };
};

Function.prototype.bind = function(context) {
  // Function on which bind will be called is 'this'
  var func = this;
  // Create an array containing all arguments passed in to bind
  var args = Array.prototype.slice.call(arguments, 1);

  // Return new function that applies context and args to original function
  return function(){
    // Create another array to combine arguments passed in to bind with
    // any arguments passed in to new bound function
    var allArgs = args.concat(Array.prototype.slice.call(arguments));
    return func.apply(context, allArgs);
  };
};
