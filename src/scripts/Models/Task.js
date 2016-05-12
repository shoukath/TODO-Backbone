define('Task', ['backbone'], function(Backbone) {
  var Task = Backbone.Model.extend({
    defaults: {
      done: false
  	},
    toggle: function(status) {
      this.set('done', !this.get('done'));
    }
  });
  return Task;
});
