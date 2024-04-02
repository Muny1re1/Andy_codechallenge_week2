//creating a function to swap the case to the opposite.
let input = prompt("Enter the string you want to swap")
let str = input;
function swapCases(str) {
    let result = "";
    //making a conditional expression to swap the chase.
      /*splitting the string components to apply the map method.*/   str.split("").map(function(letter){
                if (letter === letter.toUpperCase()){
                    result += letter.toLowerCase();
                } else if (letter === letter.toLowerCase()){
                    result += letter.toUpperCase();
                } else {
                    result += letter;
                }
            }
        ).join("");/*joining back the elements.*/
        return result
}
let swappedString = swapCases(str);
alert(swappedString);
console.log(swapCases(str));