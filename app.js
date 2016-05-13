'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var app = express();

var dbUrl = 'mongodb://shoukath:shoukath@ds011830.mlab.com:11830/todo-shoukath';

app.use(express.static(__dirname + '/src'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/public',  express.static(__dirname + '/public'));


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

MongoClient.connect(dbUrl, function(err, db) {
    app.get('/tasks', function(req, res) {
        var collection = db.collection('tasks');
        collection.find().toArray(function(err, docs) {
            console.log('Found the following records');
            console.dir(docs);
            res.json(docs);
        });
    });
    app.get('/tasks/:taskId', function(req, res) {
        var collection = db.collection('tasks');
        var o_id = new require('mongodb').ObjectID(req.params.taskId)
        collection.find({_id:o_id}).toArray(function(err, docs) {
            console.log('Found the following records');
            console.dir(docs);
            res.json(docs);
        });
    });
    app.post('/update-task', function(req, res) {
        var collection = db.collection('tasks');
        collection.insert(req.body, function(err, records) {
            if (err) throw err;
            console.log("Record added as "+records.insertedIds[0]);
            res.send(records.insertedIds[0]);
        });
    });
    app.put('/update-task/:taskId', function (req, res) {
        var collection = db.collection('tasks');
        var o_id = new require('mongodb').ObjectID(req.body._id);
        collection.update({_id:o_id}, {$set:{done:req.body.done}}, function(err, result) {
            if (err) {
                console.log('Errored');
            }
            res.send('Updated');
        });
    }); 
});

var port = process.env.PORT ? process.env.PORT : 3000;

var startupLog = function() {
    console.log('Listening to port ' + port);
    console.log('Connected correctly to server');
};

if (process.env.IP){
    app.listen(port, process.env.IP, startupLog);
} else {
    app.listen(port, startupLog);
}
