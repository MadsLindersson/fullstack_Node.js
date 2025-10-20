## Nodemon

Nodemon is a tool that restarts your Node.js server everytime a change is made in a file that you have told it to watch in, using the command `--ext <fileType>`

`nodemon --ext js,html,css api/app.js`

This will watch js, html and css files for change and restart app.js.

## Loops

We want to use loop methods to avoid side effects. Side effects happens when a function changes something unintentionally outside of it´s scope. We can avoid this using loop methods.

We can still use regular forloops, but this should **only!** be when we need to do something X number of times. 

We have different loop methods that we can use.

such as:

### forEach

forEach loop does not return a new array, therefore it should only be used when you don't care about the values afterwards.

### map

map returns a new array of the same length but every element is transformed into something new. 

```js
const numbers = [1, 2, 3];
const squared = numbers.map(n => n * n);
console.log(squared); // [1, 4, 9]
```

### filter

filter returns a new array that might have the same length or shorter. Et keeps elements that match a certain condition.

```js
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]
```

### reduce

reduce reduces an array to a single value and returns that value. It uses an accumulator to do so. An accumulator is a container of the combined result while the function iterates over the array. The accumulator needs a starting value, therefor in the example below, it gets 0.

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(sum); // 10
```

### find 

find finds the first element that matches a condition and returns the element or undefined if not found. 

```js
const numbers = [1, 2, 3, 4];
const firstEven = numbers.find(n => n % 2 === 0);
console.log(firstEven); // 2
```

### findIndex

findIndex finds the first index that matches a condition and returns that index og -1 if not found.

```js
const numbers = [1, 2, 3, 4];
const firstEvenIndex = numbers.findIndex(n => n % 2 === 0);
console.log(firstEvenIndex); // 1
```

## URL

A URL is build up of parts. 

``https:// www.example.com :8080 /path/to/page ?search=js&sort=asc #section2``

**Protocol**
``https://``

Specifies the protocol to use, https, http, ftp and so on.

**Host/domain**
``www.example.com``

The domain name or the up adress.

**Port**
``:8080``

the network port to connect to.

**Path**
``/path/to/page``

The location of the resource on the server

**Query String**
``?search=js&sort=asc``

Provides key-value pairs to send to the server, multiple key-value pairs are seperated by ``&``

**Fragment/Hash**
``#section2``

Refers to a specific part of the resource, often used for scrolling to a certain part on a page.



- Brug loop metoder medmindre vi kan tælle på fingrende
- .forEach loops through the entire list but does not return a new array, use it when you dont care about the values afterwards
- .filter creates a new array either 1:1 or less than the amount of element
- .map returnere en ny liste 1:1
- app.listen(8080) - Altid i bunden
- Brug aldrig .json i et endpoint - det skal altid være .send