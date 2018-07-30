/*
Name: Eventing Library

Link: https://challenge.makerpass.com/c/a02dd5383fcc2d57c3da37da43bc19fa

Description:
Make an eventing system mix-in that adds .trigger() and .on() to any input object.

Example usage:
var obj = mixEvents({ name: 'Alice', age: 30 });
obj.on('ageChange', function() { // On takes an event name and a callback function
  console.log('Age changed');
});
obj.age++;
obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.

Caveats:
- mixEvents should return the original object it was passed after extending it.
- If we repeatedly call .on with the same event name, it should
continue to call the old function as well. That is to say, we can have multiple
listeners for an event.
- If obj.trigger is called with additional arguments, pass those to the
listeners.
- It is not necessary to write a way to remove listeners.
*/

const mixEvents = (obj) => {
  obj.events = {};

  obj.on = (event, callback) => {
    if(!obj.events[event]) obj.events[event] = [];
    obj.events[event].push(callback);
  };

  obj.trigger = (event) => {
    let args = Array.prototype.slice.call(arguments, 1);
    if(!obj.events[event]) return;
    for (let i = 0; i < obj.events[event].length; i++) {
      let callback = obj.events[event][i];
      callback.apply(obj, args);
    }
  };

  return obj;
}
