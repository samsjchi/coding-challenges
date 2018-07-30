/*
Name: Queue Stack

Link: https://challenge.makerpass.com/c/eff7242a9d25638a8d63931129143eb7

Description:
Write a stack. Once you’re done, implement a queue using two stacks.
Do not create a storage array for your queue.
*/

var Stack = function() {
  this.storage = [];

  this.push = function(val){
    this.storage.push(val);
  };

  this.pop = function(){
    if(this.size()) {
      return this.storage.pop();
    }
  };

  this.size = function(){
    return this.storage.length;
  };
};

var Queue = function() {
  var inbox = new Stack();
  var outbox = new Stack();

  this.enqueue = function(val){
    inbox.push(val);
  };

  this.dequeue = function(){
    if(this.size()) {
      outbox.storage.push(inbox.storage.shift());
      return outbox.storage.shift();
    }
  };

  this.size = function(){
    return inbox.storage.length - outbox.storage.length;
  };
};
