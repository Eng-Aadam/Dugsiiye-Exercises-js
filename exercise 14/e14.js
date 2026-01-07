
let number;
do {
    number = parseInt(prompt("Please enter a number greater than 10:"));
} while (isNaN(number) || number <= 10);
console.log("Thank you! You entered: " + number);