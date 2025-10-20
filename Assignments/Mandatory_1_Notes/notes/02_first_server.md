## JavaScript scoping and const vs let
There are 3 types of scoping:

**Global scope**: Variables declared outside of any block or function. These are accessible everwhere.

```js
const god = "Zeus"; // global

    function name() {
        console.log(god); // works fine
}
```

**Function scope**: Variables declared inside a function. These are only accessible inside that function.

```js
function greet() { 
    const message = "Hello";
    console.log(message); // works
}

console.log(message); // Outside scope
```

**Block scope**: Variables declared with `const` or `let` inside `{ }`. These are only accessible inside that block.

```js
if (true) {
  const name = "Hera";
}

console.log(name); // Outside block

```

Try to always use `const` where ever possible and only use `let` if you know you need the value to change. **Never!** use `var`! these are function scoped and global anywhere else. This **will** cause scoping issues. (`var` ignores block scope).

Never use a variable without a declaration like `variable = 5`. Always use either `const` or `let`.

## JavaScript functions
**Function declarations vs expressions**

A declared function gets **hoisted**, this means that the function can be called before the function has been defined in the code. This is not possible for function expressions.
```js
// Declaration (hoisted)
function greet() {}

// Expression (not hoisted)
const greet = function() {};

```

**Arrow functions**

Arrow functions `=>` is a shorter way to write functions in JavaScript, it is often used as a callback function. It is not the exact same as a lambda function `->`. 

```js
const greet = () => {
     console.log("Hello!");
};

greet();
```

**Callback function**

A callback function is a function that is passed on to another function, a higher order function for the function to use.
This can also be an arrow function.

In the example below the function `greet()` is being passed as a callback function to the function `processUserInput(greet)` who then uses the callback function. 

```js
function greet(name) {
    console.log("Hello,", name);
}

function processUserInput(callback) {
    const name = "Mads";
    callback(name); // callback is called right away
}

processUserInput(greet); // "Hello, Mads"
```

**Higher order function**

A higher order function is a function that takes a callback function as an argument or returns a function.

In the example below, the function `repeat` is a higher order function. It is being called with the callback function `console.log("Hi")` as an argument together with the number 3. 

```js
function repeat(fn, times) {
    for (let i = 0; i < times; i++) fn();
}

repeat(() => console.log("Hi"), 3);

```

**Anonymous functions**

An anonymous function is a function with no name and is often just used once and usaully inline. 

```js
setTimeout(function() {
    console.log("No name here!");
}, 500);
```

**Immediately invoked function expression (IIFE)**

This function executes right after it is defined, this can be good for setup code. 

```js
(function() {
    console.log("Runs instantly!");
})();

```

## Package managers

A package manager is a tool that helps to manage the packages in your project. It manages external code libraries. It also manages dependencies, which is the packages that your packages need. So instead of writing everything yourself, you can use a package manager to install, update, configure, and remove packages. 
A very common one is NPM, which is what this procect is using. 

To install all packages you can use the terminal command `npm install`.

## Package.json

Package.json is a json file in your project that holds all the metadata of the project, such as name, version, dependencies and more. It is this file your package manager uses. 

It can also hold scripts that you can then call using your package manager. 

in the example below, when writing `npm start` the terminal then runs the script `node index.js`.
```js
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}   
```

## node_modules file

This is a file that your package manager creates and manages, it holds all the installed packages that your prject depends on. It is here that you get all your imports from when using external libraries.
