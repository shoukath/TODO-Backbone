require.config({
  paths: {
    text: '../bower_components/text/text',
    handlebars: '../bower_components/handlebars/handlebars.min',
    jquery: '../bower_components/jquery/dist/jquery.min',
    underscore: '../bower_components/underscore-amd/underscore',
    Backbone: '../bower_components/backbone-amd/backbone',
    Task: 'scripts/Models/Task',
    taskList: 'scripts/Collections/taskList',
    TaskView: 'scripts/Views/TaskView',
    TaskListView: 'scripts/Views/TaskListView'
  },
  shim: {
    'handlebars': {
      exports: 'Handlebars'
    }
  }
});
