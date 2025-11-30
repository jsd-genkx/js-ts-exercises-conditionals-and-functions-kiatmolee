// TODO-04: Write if/else if to check and print:
// Divisible by both 3 and 5 → "FizzBuzz"
// Divisible by only 3 → "Fizz"
// Divisible by only 5 → "Buzz"
// Otherwise → "Not divisible by 3 or 5"

// TODO BONUS: Rewrite with if

let num = 100;
if(num === 0){
    console.log(`${num} is not acceptable`)
}
else if((num%3 === 0) && (num%5 ===0)){
    console.log(`${num} is FizzBuzz`)
}
else if(num%3 === 0)
{
    console.log(`${num} is Fizz`)
}
else if(num%5 ===0){
    console.log(`${num} is Buzz`)
}
else {
    console.log("Not divisible by 3 or 5")
}