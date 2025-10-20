## Eksport & import

### CommonJS

In commonJS you can import using require and module.export to export.

```js
// mathUtils.js
function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }

module.exports = { add, multiply };
```

Import and use it like this:

```Js
const { add, multiply } = require('./mathUtils.js');
console.log(add(2,3)); // 5
```

### ES modules

There are ways to export and import JavaScript code from on file to another. Here are 2 ways:

To do these you need the scripts to be of type="module". You can set this in package.json.

**Export default**
```js
//File name = mathUtils
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

export default {
  add: add,
  multiply: multiply
};
```

You can import and use it like this:

```js
import mathUtils from './mathUtils.js';

console.log(mathUtils.add(2, 3));      // 5
console.log(mathUtils.multiply(2, 3)); // 6
```

**Exporting individually**

```js
// File name = mathUtils.js
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}
```

You can import and use it like this:

```Js
import { add, multiply } from './mathUtils.js';

console.log(add(2, 3));      // 5
console.log(multiply(2, 3)); // 6
```

## Serving static files

It is a good idea to only serve your static files that you actually want to be public and not everything else. We can do this by defining a folder that we make public, usually called "public", here we put our static files in, such as CSS, HTML and JS. We can do this using ``express.static()``

```Js
import express from "express";
const app = express();

// Serve only files from the 'public' folder
app.use(express.static("public"));
```

## Redirecting

**Redirecting server side**
You can redirect a page using the server instead of using the client. You can do this in Express. 

```js
app.get("/old-page", (req, res) => {
    res.redirect("/new-page"); 
});
```

When hitting the /old-page endpoint the client will be redirected to /new-page instead. 

This is good for SEO.

**Redirecting client side**

You can redirect a page using JavaScript.

```js
  window.location.href = "/new-page";
```

This will also redirect to /new-page but on the client side. 

This can be smart if you need som redirection based on client sided conditions but is less good for SEO.