function Model(items) {
  this.items = items;
  this.selectedIndex = -1;

  this.itemAdded = new Observable(this);
  this.itemRemoved = new Observable(this);
  this.selectedIndexChanged = new Observable(this);
}

Model.prototype = {
  getItems: function () {
    return [].concat(this.items);
  },
  addItem: function (item) {
    this.items.push(item);
    this.itemAdded.notify({
      item: item
    });
  },
  removeItemAt: function (index) {
    var item = this.items[index];

    this.items.splice(index, 1);
    this.itemRemoved.notify({
      item: item
    });

    if (index === this.selectedIndex) {
      this.setSelectedIndex(-1);
    }
  },
  getSelectedIndex: function () {
    return this.selectedIndex;
  },
  setSelectedIndex: function (index) {
    var previousIndex = this.selectedIndex;
    
    this.selectedIndex = index;
    this.selectedIndexChanged.notify({
      previous: previousIndex
    });
  }
}