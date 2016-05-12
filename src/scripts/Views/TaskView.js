define('TaskView', ['Backbone', 'handlebars', 'text!scripts/Templates/Task.hbs'], function(Backbone, Handlebars, TaskTemplate) {
  return Backbone.View.extend({
    tagName: 'li',
    events: {
      'click input': 'statusUpdated'
    },
    template: Handlebars.compile(TaskTemplate),
    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function() {
      var markup = this.template(this.model.toJSON());
      this.$el.html(markup);

      return this;
    },
    statusUpdated: function() {
      this.model.toggle();
    }
  });
});
