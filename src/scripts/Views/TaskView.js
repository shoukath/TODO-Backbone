define('TaskView', ['backbone', 'handlebars'], function(Backbone, Handlebars) {
  var TaskView = Backbone.View.extend({
    tagName: 'li',
    events: {
      'click input': 'statusUpdated'
    },
    template: Handlebars.compile($('#taskItem').html()),
    initialize: function() {
      this.listenTo(this.model, 'change', this.render);
    },
    render: function() {
      var markup = this.template(this.model.toJSON());
      this.$el.html(markup);

      return this;
    },
    statusUpdated: function() {
      // var checkboxStatus = this.$el.find('input').is(':checked');
      this.model.toggle();
    }
  });
  return TaskView;
});
