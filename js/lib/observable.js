function Observable(sender) {
  this.sender = sender;
  this.subscribers = [];
}

Observable.prototype = {
  attach: function (subscriber) {
    if (this.subscribers.indexOf(subscriber) <= -1) {
      this.subscribers.push(subscriber);
    } else {
      throw new Error('Subscriber already exists within the subscribers array!');
    }
  },
  detach: function(subscriber) {
    for (var i = 0; i < this.subscribers.length; i += 1) {
      if (this.subscribers[i] === subscriber) {
        this.subscribers.splice(i, 1);
        return;
      }
    }
  },
  notify: function (args) {
    for (var i = 0; i < this.subscribers.length; i += 1) {
      this.subscribers[i](this.sender, args);
    }
  }
}