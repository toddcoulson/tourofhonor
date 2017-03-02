
var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 8080;

var session = require('express-session');

app.use(express.static(__dirname + '/app'));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/node_modules',  express.static(__dirname + '/node_modules'));
app.use('/bootstrap-photo-gallery',  express.static(__dirname + '/bootstrap-photo-gallery'));
//app.use('/node_modules', express.static(path.dirname(__dirname) + '/node_modules'));
//app.set('view engine', 'ejs');


// app.use('/', function(req, res){
// 	res.send('Our First Express program!');
// 	console.log(req.cookies);
// 	console.log('================');
// 	console.log(req.session);
// });

require('./app/routes.js')(app);

app.listen(port);
console.log('Server running on port: ' + port);


