define('TaskList', ['backbone', 'Task'], function(Backbone, Task) {
  var TaskList = Backbone.Collection.extend({
    model: Task
  });
  return TaskList;
});
