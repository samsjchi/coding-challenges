/*
Name: Sorted Insert

Link: https://challenge.makerpass.com/c/de5a320fbf11a4f86312d46553989844

Description:
Given a sorted stack of integers (smallest integer at the top) and an element to insert,
write a function – sortedInsert(stack, element) – which inserts the element into the
correct position of the stack.

sortedInsert should manipulate the original stack and return the original stack.

The stack will have the methods, isEmpty, peek, push, and pop. You can also use count to
view how many elements are in the stack. The stack implementation is available to view below.
*/

var Stack = function (initialValue) {
  this.store = {};
  this.count = 0;

  if (initialValue !== undefined) {
    this.push(initialValue);
  }
};

Stack.prototype.isEmpty = function() {
  return !this.count;
};

Stack.prototype.peek = function() {
  return this.store[this.count];
};

Stack.prototype.push = function(val) {
  this.store[++this.count] = val;
};

Stack.prototype.pop = function() {
  if (!this.isEmpty()) {
    var tmp = this.store[this.count];
    delete this.store[this.count--];
    return tmp;
  }
};

const sortedInsert = (stack, element) => {
  let sortedArray = [];
  sortedArray.push(element);

  while(!stack.isEmpty()) {
    sortedArray.push(stack.pop());
  }

  sortedArray.sort((a,b) => {
    return a - b;
  }).reverse();

  sortedArray.forEach(num => {
    stack.push(num);
  })

  return stack;
};
