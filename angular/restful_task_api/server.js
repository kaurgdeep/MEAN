// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
app.use(express.static( __dirname + '/public/dist/public' ));

var mongoose = require('mongoose');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/task');

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.json());
// Require path
var path = require('path');
// Setting our Static Folder Directory
// app.use(express.static(path.join(__dirname, './static')));
// // Setting our Views Folder Directory
// app.set('views', path.join(__dirname, './views'));
// // Setting our View Engine set to EJS
// app.set('view engine', 'ejs');
// Routes
// Root Request

var TaskSchema = new mongoose.Schema({
    title: {type:String},
    description: {type:String, default: ""},
    completed: {type: Boolean, default: false}
   },{ timestamps:true });
   mongoose.model('Task', TaskSchema); // We are setting this Schema in our Models as 'User'
   var newTask = mongoose.model('Task') // We are retrieving this Schema from our Models, named 'User'
   
app.get('/tasks', function(req, res) {
    newTask.find({}, function(err, data){
        if(err){
           console.log("Returned error", err);
            // respond with JSON
           res.json({message: "Error", error: err})
        }
        else {
            // respond with JSON
           res.json({message: "Success", data:data})
        }
     })
})
// Add User Request 
app.post('/tasks', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.
    var task = new newTask({title: req.body.title, description: req.body.description});
  // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
    task.save(function(err) {
    // if there is an error console.log that something went wrong!
    if(err){
        console.log("Returned error", err);
         // respond with JSON
        res.json({message: "Error", error: err})
     }
     else {
         // respond with JSON
        res.json({message: "Success"})
     }
    })
})
app.delete('/tasks/:id',function(req,res){
    console.log(req.params.id)
    newTask.remove({_id:req.params.id }, (err)=>{
        res.json({message:"success"})
    })
})

app.put('/tasks/:id',function(req,res){
    console.log(req.params.id)
    newTask.update({_id:req.params.id }, {title: req.body.title, description: req.body.description}, (err)=>{
        res.json({message:"success",data:req.body})
    })
})

app.get('/tasks/:id',function(req,res){
    console.log(req.params.id)
    newTask.findOne({_id: req.params.id}, function (err, data) {
        if (err) {
            console.log("Returned error", err);
            res.json({ message: "Error", error: err });
        }
        else {
            res.json({ message: "success", data: data });
        }
    })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
