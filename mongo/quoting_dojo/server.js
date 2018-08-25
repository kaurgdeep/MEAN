// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
var mongoose = require('mongoose');
const flash = require('express-flash');
app.use(flash());
var session = require('express-session');
// more new code:
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// This is how we connect to the mongodb database using mongoose -- "basic_mongoose" is the name of
//   our db in mongodb -- this should match the name of the db you are going to use for your project.
mongoose.connect('mongodb://localhost/quoting_dojo');

var quoteSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 2},
    quote: { type: String, required: true, minlength: 6}
   }, {timestamps: true });
   mongoose.model('Quote', quoteSchema); // We are setting this Schema in our Models as 'User'
   var Quote = mongoose.model('Quote') // We are retrieving this Schema from our Models, named 'User'
   

// Routes
// Root Request
//for api body-parser
// app.get('/', function (req, res) {
    // This is where we will retriexve the users from the database and include them in the view page we will be rendering.
    // Quote.find({},function(err,data){
    //     res.json(data);
    // })
    // })
app.get('/', function (req, res) {
    // This is where we will retriexve the users from the database and include them in the view page we will be rendering.

        res.render('index');
    })

// app.get("/quotes", function(req,res){
//     res.render("quotes")
// })
// Add User Request 
app.post('/quotes', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.
    var newQuote = new Quote({name: req.body.name, quote: req.body.quote});
    newQuote.save(function(err){

        if(err){
            console.log("wrong");
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            // redirect the user to an appropriate route
            res.redirect('/');
        } else{
            console.log("add a quote");
            res.redirect("/skip")
        }
        Quote.find({}, function (err, data) {
            if (err) {
                console.log('something went wrong');
            } else { // else console.log that we did well and then redirect to the root route
                console.log('successfully added a user!');
            }

        res.render('quotes', {allquotes: data});
    
})
    
})
})
app.get('/skip', function (req, res) {
    // This is where we will retriexve the users from the database and include them in the view page we will be rendering.
    Quote.find().sort({createdAt:-1}).find({}, function (err, data) {
        if (err) {
            console.log('something went wrong');
        } else { // else console.log that we did well and then redirect to the root route
            console.log('successfully added a user!');
        }
        res.render('quotes', {allquotes: data});
    })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})
