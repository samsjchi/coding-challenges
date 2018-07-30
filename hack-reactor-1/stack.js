/*
Name: Stack

Link: https://challenge.makerpass.com/c/1c3ba217e15098cfa933a04be0f98110

Description:
Implement a stack with the following restrictions and methods:

Restrictions:
* Do not use an array as storage

Methods:
* size should return an integer representing the number of elements in the stack.
* peek should return the top item of the stack without removing it. If the stack
is empty, it should return null.
* push should add an item to the top of the stack. It should also accept multiple
arguments and push them to the stack in order. It should return the topmost value
of the stack after the pushing.
* pop should remove an item off the top of the stack and returned the removed value.
*/

var Stack = function(initialValue) {
  this._storage = {};
  this._size = 0;

  if(initialValue) {
    this.push(initialValue);
  }
};

Stack.prototype.size = function() {
  return this._size;
};

Stack.prototype.peek = function() {
  if(this.size()) {
    var result = this._storage[this._size];
    return result;
  } else {
    return null;
  }
};

Stack.prototype.push = function(...args) {
  args.forEach(arg => {
    this._size++;
    this._storage[this._size] = arg;
  });
  return this._storage[this._size];
};

Stack.prototype.pop = function() {
  if(this.size()) {
    var result = this._storage[this._size];
    delete this._storage[this._size];
    this._size--;
    return result;
  } else {
    return null;
  }
};
