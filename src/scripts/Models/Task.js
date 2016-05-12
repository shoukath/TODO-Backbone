define('Task', ['backbone'], function(Backbone) {
  var Task = Backbone.Model.extend({
    defaults: {
      done: false
  	}
  });
  return Task;
});
