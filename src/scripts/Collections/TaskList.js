define('taskList', ['backbone', 'Task'], function(Backbone, Task) {
  var TaskList = Backbone.Collection.extend({
    model: Task
  });
  return new TaskList;
});
