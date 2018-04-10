function View(model, elements) {
  this.model = model;
  this.elements = elements;

  this.listModified = new Observable(this);
  this.addButtonClicked = new Observable(this);
  this.removeButtonClicked = new Observable(this);

  this.model.itemAdded.attach(function () {
    this.rebuildList();
  }.bind(this));

  this.model.itemRemoved.attach(function () {
    this.rebuildList();
  }.bind(this));

  this.elements.list.addEventListener('change', function (event) {
    this.listModified.notify({
      index: event.target.selectedIndex
    });
  }.bind(this));

  this.elements.addButton.addEventListener('click', function () {
    this.addButtonClicked.notify();
  }.bind(this));

  this.elements.removeButton.addEventListener('click', function () {
    this.removeButtonClicked.notify();
  }.bind(this));
}

View.prototype = {
  show: function () {
    this.rebuildList();
  },
  rebuildList: function () {
    var key;
    var list = this.elements.list;
    var items = this.model.getItems();

    list.innerHTML = '';

    for (key in items) {
      if (items.hasOwnProperty(key)) {
        var child = document.createElement('option'); 
        child.innerHTML = items[key];
        list.appendChild(child);
      }
    }

    this.model.setSelectedIndex(-1);
  }
}