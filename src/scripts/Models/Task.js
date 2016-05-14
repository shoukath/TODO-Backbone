define('Task', ['Backbone'], function(Backbone) {
  return Backbone.Model.extend({
    urlRoot: '/update-task',
    idAttribute: "_id",
    defaults: {
      done: false
    },
    initialize: function() {
        var self = this;
        this.on('change', function() {
            self.save();
            console.log('Changed');
        });
        this.on('add', this.add);
        this.checkforChanges();
    },
    add: function(model) {
        if(!model.get('_id')) {
            console.log('Added');
            model.save(null, {
                success: function (model, response) {
                    model.set('_id', response, {silent: true});
                    console.log("success");
                },
                error: function (model, response) {
                    console.log("error");
                }
            });
        }
    },
    toggle: function(status) {
      this.set('done', !this.get('done'));
    },
    checkforChanges: function() {
        var self = this;
        setInterval(function() {
            console.log('Snynced');
            Backbone.sync('read', self, {
                url: '/tasks/' + self.get('_id'),
                success: function (model, response) {
                    self.set(model[0]);
                    console.log("success");
                },
                error: function (model, response) {
                    console.log("error");
                }
            });
        }, 10000);
    }
  });
});
