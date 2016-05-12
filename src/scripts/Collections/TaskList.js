define('TaskList', ['Task'], function(Task) {
  var TaskList = Backbone.Collection.extend({
    model: Task
  });
  return TaskList;
});
