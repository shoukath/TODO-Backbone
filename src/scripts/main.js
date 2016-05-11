var TaskModel = Backbone.Model.extend({
	defaults: {
		name: 'Test',
		done: false
	}
});

var TaskCollection = Backbone.Collection.extend();

var TaskView = Backbone.View.extend({
	tagName: 'li',
	template: _.template($('#taskItemTemplate').html()),
	initialize: function() {

	},
	render: function() {
		var markup = this.template(this.model.toJSON());;
		this.$el.html(markup);
		
		return this;
	}
});

var TaskListView = Backbone.View.extend({
	el: '#taskList',
	initialize: function() {
		this.listenTo(this.collection, 'change', this.render);
	},
	render: function() {
		this.collection.each(this.addTask, this);
	},
	addTask: function(item) {
		var taskItem = new TaskView({
			model: item
		});
		this.$el.append(taskItem.render().el);
	}
});

var taskModelInstance = new TaskModel();

var taskModelInstance1 = new TaskModel();

var taskCollectionInstance = new TaskCollection([taskModelInstance, taskModelInstance1]);

var taskViewInstance = new TaskListView({
	collection: taskCollectionInstance
});

taskViewInstance.render();