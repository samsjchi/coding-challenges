/*
Name: Linked List

Link: https://challenge.makerpass.com/c/737ecb1d0cf359e9c3550e1ad0b60fcf

Description:
Implement a linked list using the pseudoclassical instantiation pattern.
*/

var LinkedList = function(initialValue) {
  this.head = null;
  this.tail = null;

  if(initialValue) this.addToTail(initialValue);
};

LinkedList.prototype.addToTail = function(val) {
  var newTail = new Node(val);
  if(!this.head) this.head = newTail;
  if(this.tail) this.tail.next = newTail;
  this.tail = newTail;
};

LinkedList.prototype.removeHead = function() {
  if(this.head === this.tail) {
    this.head = null;
    this.tail = null;
  } else {
    var currentHead = this.head;
    this.head = this.head.next;
    return currentHead.value;
  }
};

LinkedList.prototype.contains = function(target) {
  var node = this.head;
  while(node) {
    if(node.value === target) return true;
    node = node.next;
  }
  return false;
};

var Node = function(val) {
  var node = {};
  node.value = val;
  node.next = null;
  return node;
};
