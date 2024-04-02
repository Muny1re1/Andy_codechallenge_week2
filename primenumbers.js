//defining an array of numbers. 
let input = prompt("Input the elements of your array.")
 
 let result = input.split('').map(Number).filter(num => !isNaN(num));
 //define a function that chooses the prime numbers.
    //creating a conditionals and a for loop for each number.
function primeNumbers(result){
    if(result <= 1) return false;//creating a condition that compares the values to one.
    if(result <= 3) return true;// creating a condition that compares the values to three.
    //creating a conditional to compare the remaineders of the values when divided by either two or three.
    if(result % 2 === 0 || result % 3 === 0) return false;
    let i= 5//creating a condition to compare the divisibility of the squares of the values.
    while(i*i <= result){
        if(result % i === 0 || result % (i+2) === 0) return false;
        i += 6
    }
    return true;
}
// calling a function to filter prime numbers from an array.
function filterPrimeNumbers (arr){
    return arr.filter(primeNumbers);
}
filterPrimeNumbers(result);
let filteredPrimeNumbers = filterPrimeNumbers(result);
alert(filteredPrimeNumbers)
//printing the result of the function.
console.log(filterPrimeNumbers(result));
