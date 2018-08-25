// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);
// This sets the location where express will look for the ejs views

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');
app.get("/cats",function(request, response){
    response.render("cats")
})
app.get("/cars",function(request, response){
    response.render("cars")
})



app.listen(8000, function() {
  console.log("listening on port 8000");
})
