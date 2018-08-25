// Create a function called fizzbuzz that accepts a parameter n. Have the function log all the numbers from 1 to n in order with the following exceptions:

// If the number is divisible by both 3 and 5, log "FizzBuzz" instead of the number
// If the number is divisible by 3 but not by 5, log "Fizz" instead of the number
// If the number is divisible by 5 but not by 3, log "Buzz" instead of the number
// Write your code and run it with several examples to ensure it is working as expected. Use the modulus operator!

function fizzbuzz(num){
    if (typeof(num) != "number"){
        return false;
    }
    for(i = 1; i <= num; i++){
        if(i % 3 == 0 && i % 5 != 0){
            console.log("Fizz" + i)
        }
    }
    for(i = 1; i<=num; i++){
        if(i % 3 != 0 && i % 5 == 0){
            console.log("Buzz" + i)
        }
    }
    for(i = 1; i<=num; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("Fizz-Buzz" + i)
        }
    }

}

fizzbuzz(20);

