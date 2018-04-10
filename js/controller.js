function Controller(model, view) {
  this.model = model;
  this.view = view;

  this.view.listModified.attach(function (sender, args) {
    this.updateSelected(args.index);
  }.bind(this));

  this.view.addButtonClicked.attach(function () {
    this.addItem();
  }.bind(this));

  this.view.removeButtonClicked.attach(function () {
    this.removeItem();
  }.bind(this));
}

Controller.prototype = {
  addItem: function () {
    var item = window.prompt('Add item:', '');
    if (item) {
      this.model.addItem(item);
    }
  },
  removeItem: function () {
    var index = this.model.getSelectedIndex();
    
    if (index !== -1) {
      this.model.removeItemAt(this.model.getSelectedIndex());
    }
  },
  updateSelected: function (index) {
    this.model.setSelectedIndex(index);
  }
}