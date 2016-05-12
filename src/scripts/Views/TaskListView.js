define('TaskListView', ['Backbone', 'TaskView'], function(Backbone, TaskView) {
  return Backbone.View.extend({
    el: '#todoList',
    initialize: function() {
      this.listenTo(this.collection, 'add', this.render);
    },
    render: function() {
      this.$el.empty();
      this.collection.each(this.addTask, this);
    },
    addTask: function(task) {
      var taskView = new TaskView({
        model: task
      });
      var renderedTaskItem = taskView.render().$el;
      this.$el.append(renderedTaskItem);
    }
  });
});
