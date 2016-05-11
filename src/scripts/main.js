var Task = Backbone.Model.extend({
  defaults: {
    done: false
  }
});

var TaskList = Backbone.Collection.extend({
  model: Task
});

var TaskView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click input': 'statusUpdated'
  },
  template: Handlebars.compile($('#taskItem').html()),
  render: function() {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);

    return this;
  },
  statusUpdated: function() {
    var checkboxStatus = this.$el.find('input').is(':checked');
    this.model.set('done', checkboxStatus);

    if (checkboxStatus) {
      this.$el.find('.taskName').addClass('strike');
    } else {
      this.$el.find('.taskName').removeClass('strike');
    }

  }

});

var TaskListView = Backbone.View.extend({
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

// $('#todoList').on('click', 'input', function(event) {
//   console.log('Clicked');
//   //
// });


define('Test', function() {
  return "HI";
});

require(['Test'], function(test){
  console.log(test);
});
