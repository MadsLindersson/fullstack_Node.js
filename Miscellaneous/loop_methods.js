"use strict"

// .forEach .find .filter .map .reduce .indexOf
// .forEach loops through the entire list but does not return a new array, use it when you dont care about the values afterwards
// .filter creates a new array either 1:1 or less than the amount of element
// .map returnere en ny liste 1:1

console.log("Loop methods");

// Brug loop metoder medmindre vi tæller med fingrende

const numbers = [1, 2, 3, 4, 5];

// assignment: double the numbers above

const newNumbersArray = numbers.map(number => number * 2);

console.log(newNumbersArray);

const desserts = [
    {
        name: "flan",
        weightGram: 200,
        
    },
    {
        name: "Bananasplit",
        weightGram: 700
    },
    {
        name: "Brownie",
        weightGram: 600
    }];

// Task: make all dessers weight 400 gram extra except for brownie

const dessertsChanged = desserts.map((dessert) => {
    if (dessert.name !== "Brownie")
        return {name: dessert.name, weightGram: dessert.weightGram + 400}
    else
        return dessert
    
});

console.log(dessertsChanged);

//Ternary statement
const biggerPortionedDesserts = desserts.map((dessert) => ({
    name: dessert.name,
    weightGram: dessert.name === "brownie" ? dessert.weightGram : dessert.weightGram + 400
}));

console.log(biggerPortionedDesserts);

// de 3 parametre et map kan tage
numbers.map((element, index, array) => console.log(element, index, array));

