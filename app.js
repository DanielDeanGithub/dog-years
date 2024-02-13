// My current age (when getting out of bed first thing in the morning)
const myAge = 100;

// This variable will change
let earlyYears = 2;
earlyYears *= 10.5;

// We already accounted for the first two years so take the myAge variable, and subtract 2 from it
let laterYears = myAge - 2;

// Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by later years.
laterYears *= 4;

console.log(`Early Years: ${earlyYears}\nLater Years: ${laterYears} `);

// Calculates age in dog years using previous variables
const myAgeInDogYears = earlyYears + laterYears;

// The toLowerCase method returns a string with all lowercase letters.
const myName = "Daniel".toLowerCase();

// Displays my name and age in dog years using string interpolation to display the values
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)