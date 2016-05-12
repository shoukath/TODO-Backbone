define('Task', ['backbone'], function(Backbone) {
  var Task = Backbone.Model.extend({
    defaults: {
      done: false
  	},
    taskStatus: function(status) {
      this.set('done', status);
    }
  });
  return Task;
});
