
require(['Task', 'TaskList', 'TaskView', 'TaskListView'], function(Task, TaskList, TaskView, TaskListView){
	//Implementing the Backbone objects
	var taskList = new TaskList();

	var taskListView = new TaskListView({
	  collection: taskList
	});

	// Events
	$('#todoInput').keypress(function(event) {
	  var taskName = $(this).val();
	  if( event.keyCode === 13 && taskName.length) {
	    var task = new Task({name: taskName});
	    taskList.add(task);

	    $(this).val('');
	  }
	});
});
