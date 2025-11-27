// TODO-02: Use if/else to check if it's a number
// (hint: typeof or isNaN)

const userInput = 34;
// Try changing to "hello", 10, null, NaN
if(typeof userInput === "number" && !isNaN(userInput)) {
    console.log("It's a valid number");
} else{console.log( userInput," is not a valid number");}

