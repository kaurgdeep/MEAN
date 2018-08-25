var express = require("express");
var app = express();
app.use(express.static(__dirname + "/static"));
app.set("views",__dirname + "/views");
app.set("view engine", "ejs");
app.listen(8000, function(){
    console.log("listening on port 8000");
})
app.get("/cats", function(request, response){
    response.render("cats");
})
app.get("/home", function(request, response){
    response.render("cats");
})
app.get("/cat1", function(request, response){
    var catlist = {
        name: "katty",
        food: "pasta",
        age: "19",
        image: "/kat1.jpg",
        sleeping_spot: [
            {name:"bedroom"},
            {name: "beach"}
        ]
    }
    response.render("details", {details:catlist});
})

app.get("/cat2", function(request, response){
    var catlist = {
        name: "katty1",
        food: "pizza",
        age: "18",
        image: "/kat1.jpg",
        sleeping_spot: [
            {name:"bedroom"},
            {name: "beach"}
        ]
    }
    response.render("details", {details:catlist});
})

app.get("/cat3", function(request, response){
    var catlist = {
        name: "katty2",
        food: "ice-cream",
        age: "20",
        image: "/kat1.jpg",
        sleeping_spot: [
            {name:"bedroom"},
            {name: "not-beach"}
        ]
    }
    response.render("details", {details:catlist});
})