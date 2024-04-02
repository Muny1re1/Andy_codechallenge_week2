//creating a function that generates an array with the inputs of the first number and the secomd.
let num1 = parseFloat(prompt("Enter the starting number"));
let num2 = parseFloat(prompt("Enter the ending number"));
function generateArray(num1, num2){
const result = [];
//creating a conditionals and a for loop for each number.
 if( num1 <= num2){
    for(let i= num1; i<= num2; i++){
        result.push(i);
    }
 } else {
    for(let i= num1; i>= num2; i--){
        result.push(i);
    }
 }
   return result;
}
let generatedArray = [];
generatedArray = generateArray(num1, num2);
alert(generatedArray);
console.log(generatedArray)