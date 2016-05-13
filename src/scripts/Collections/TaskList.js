define('taskList', ['Backbone', 'Task'], function(Backbone, Task) {
  var TaskList = Backbone.Collection.extend({
    url: '/tasks',
    model: Task
  });

  var taskList = new TaskList();

  taskList.fetch();

  setInterval(function() {
    taskList.fetch();
  }, 10000);

  return taskList;
});
