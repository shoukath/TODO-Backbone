'use strict'

var express = require('express');
var bodyParser = require('body-parser');
// var MongoClient = require('mongodb').MongoClient;
var app = express();

var dbUrl = 'mongodb://shoukath:shoukath@ds057234.mongolab.com:57234/schools';

app.use(express.static(__dirname + '/src'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));


app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// MongoClient.connect(dbUrl, function(err, db) {
// 	app.get('/user', function(req, res) {
// 		var collection = db.collection('users');
// 		collection.find({
// 			'username': 'shoukathkhan',
// 			'password': 'test'
// 		}).toArray(function(err, docs) {
// 			console.log('Found the following records');
// 			console.dir(docs);
// 			res.json(docs);
// 			// db.close();
// 		});
// 	});
//
// 	app.post('/login', function(req, res) {
// 		db.collection('users').find({
// 			'username': req.body.username,
// 			'password': req.body.password
// 		}).toArray(function(err, docs) {
// 			console.log('Found the following records');
// 			console.dir(docs);
// 			res.json(docs);
// 			// db.close();
// 		});
// 	});
// });

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
