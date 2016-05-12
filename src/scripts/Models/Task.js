define('Task', function() {
  var Task = Backbone.Model.extend({
    defaults: {
      done: false
  	}
  });
  return Task;
});
