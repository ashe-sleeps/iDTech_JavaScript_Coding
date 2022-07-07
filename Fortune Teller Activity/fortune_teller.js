// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE

//to assign fortune value go to lines 29-41 :)
var fortune;

// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.

// YOUR CODE GOES HERE
function fortuneTeller(number){
    if(number >=0 && number <=10){
        if(number >=0 && number <=3){
            fortune = "Fortune selected: "+number + " - Sorry! You have a low fortune!"
        }
        if(number >3 && number <=7){
            fortune = "Fortune selected: "+number + " - Meh! You have an average fortune!"
        }
        if(number >7 && number <=10){
            fortune = "Fortune selected: "+number + " - Sweet! You have a good fortune!"}
    }else{fortune = "Fortune selected: "+number + " - We're having trouble connecting to your fortune! Try again!"
    };
    return fortune
}
//to assign fortune number: fortuneTeller(fortune number goes here!) in line(s) below :)
console.log("Your fortune: ", fortuneTeller(0))
console.log("Your fortune: ", fortuneTeller(1))
console.log("Your fortune: ", fortuneTeller(2))
console.log("Your fortune: ", fortuneTeller(3))
console.log("Your fortune: ", fortuneTeller(4))
console.log("Your fortune: ", fortuneTeller(5))
console.log("Your fortune: ", fortuneTeller(6))
console.log("Your fortune: ", fortuneTeller(7))
console.log("Your fortune: ", fortuneTeller(8))
console.log("Your fortune: ", fortuneTeller(9))
console.log("Your fortune: ", fortuneTeller(10))
console.log("Your fortune: ", fortuneTeller(11))