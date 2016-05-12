define('Task', ['Backbone'], function(Backbone) {
  return Backbone.Model.extend({
    defaults: {
      done: false
  	},
    toggle: function(status) {
      this.set('done', !this.get('done'));
    }
  });
});
