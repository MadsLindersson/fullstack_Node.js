"use strict"
// hoisting
console.log(getRandomInt(5, 10));

function getRandomInt (max, min)    {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

const getRandomIntAnonymousFunction = function (max, min)    {
    return Math.floor(Math.random() * (max + 1 - min) + min)
};

const getRandomIntArrowFunction = (min, max) => {
    return Math.floor(Math.random() * (max + 1 - min) + min)
};

// console.log(getRandomIntArrowFunction);

// action = call back function
// a function that is passed as an argument
// and only potentially invoked later
function genericActionPerformer (name, action)  {
    return action(name);
}


function cookingAction (name)   {
    return `${name} enjoys cooking`
}

// task using generecActionsPerformer, console.log "Jens enjous cooking"
// task do it in one below , dont change anything above

console.log(genericActionPerformer("Jens", cookingAction));

// task using an arrow functin below, log Marco loves to run




const runningAction = (name) => {
   return `${name} loves running`
}

console.log(genericActionPerformer("Marco", runningAction));

// Task in a single line below write Lucas likes asking questions

console.log(genericActionPerformer("Lucas", (name) =>
    `${name} likes asking questions`
));
