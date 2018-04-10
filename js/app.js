var data = ['lorem ipsum', 'dolor sit amet', 'the quick brown fox', 'jumps over', 'the lazy dog'];

window.addEventListener('load', function() {
  var model = new Model(data);
  var view = new View(model, {
    'list': document.querySelector('.list'),
    'addButton': document.querySelector('.addBtn'),
    'removeButton': document.querySelector('.removeBtn')
  });
  var controller = new Controller(model, view);

  view.show();
});
