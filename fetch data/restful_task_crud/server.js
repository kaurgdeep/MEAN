
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');
// app.use(express.static(path.join(__dirname, './static')));
app.use(express.static( __dirname + '/public/dist/public' ));

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restful_crud');


var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
   })
   mongoose.model('User', UserSchema); 
   var User = mongoose.model('User')
   
app.get('/', function(req, res) {
    res.render('index');
})
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    res.redirect('/');
})
app.listen(8000, function() {
    console.log("listening on port 8000");
})
