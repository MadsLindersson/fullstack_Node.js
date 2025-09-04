"use strict";

// Missing decklaration
// totalGlobalVariable = "Never do this!"

// Dont use var
// var globalScope = "Never do this"

// Always use const
// const public = "Variable"

// const is constant in the assignment
// er can change values of constant but we cannot reassign it
const someType = 123;
//Virker ikke:
//someType = 456;

function someFunction ()    {
    //Function scope
}

{ // Block scope
    var someVariable = true;
    {
        someVariable = false;
    }
    console.log(someVariable);
}

for (let i = 0; i <= 5; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000)
}