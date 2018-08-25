
// //1.
// var hello;
// console.log(hello);     //console.log undefined                              
// var hello = 'world';                                 

// //2.
// var needle;
// var needle = 'haystack';
// test();  //doesn't matter where u calling the function
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }
// //3.

// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);//console.log super cool

// //4.

// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);//prints chicken,half-chicken
// 	var food = 'gone';
// }

// //5.

// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);//it breaks because no function called mean
// }
// console.log(food);

// //6.
// var genre;
// console.log(genre); //undefined
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);//rock
// 	var genre = "r&b";
// 	console.log(genre);//genre
// }
// console.log(genre);//disco

//7.

// dojo = "san jose";
// console.log(dojo);//san jose
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);//seattle
// 	var dojo = "burbank";
// 	console.log(dojo);//burbank
// }
// console.log(dojo);//san jose

//8.

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}




