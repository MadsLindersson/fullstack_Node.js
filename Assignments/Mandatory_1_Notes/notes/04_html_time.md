## Rest API CRUD design and implementation

The following is the CRUD of a Rest API example of how it should look, following conventions.

### The design:

| HTTP Verb | URL                 | Operation               |
|-----------|------------------- |------------------------ |
| GET       | `/greekGods`        | Retrieve all Greek gods |
| GET       | `/greekGods/{id}`   | Retrieve a Greek god    |
| POST      | `/greekGods`        | Create a Greek god      |
| PUT       | `/greekGods/{id}`   | Update a Greek god      |
| DELETE    | `/greekGods/{id}`   | Delete a Greek god      |

### GET
```js
app.get("/greekGods", (req, res) => {
    res.send({ data:  greekGods });
});
```

### GET:id
```js
app.get("/greekGods/:id", (req, res) => {
    const greekGodToSend = findGreekGodById(req.params.id, greekGods);

    if (!greekGodToSend) {
        res.status(404).send({ errorMessage: `Greek god not found by id ${req.params.id}` });
    } else {
        res.send({ data: greekGodToSend });
    };
});
```

### POST
```js
app.post("/greekGods", (req, res) => {
    if (!req.body)  {
        return res.status(400).send({ errorMessage: "Requires a JSON body" });
    };
    res.send(createGreekGod(req.body));
});
```

### PUT
```js
app.put("/greekGods/:id", (req, res) => {
    res.send(updateGreekGod(req.body, Number(req.params.id)));
});
```

### DELETE
```js
app.delete("/greekGods/:id", (req, res) => {
    res.send({ data: deleteGreekGod(Number(req.params.id)) })
});
```

## Date

The Date object is a built in object in JavaScript. You can use this for anything relating to using date and time. 

The months in Date starts at 0, this is important to note. 

You can create dates using:
```js
// Current date and time
const now = new Date();
console.log(now); // e.g., 2025-10-20T08:15:30.123Z

// Specific date
const birthday = new Date('1997-05-12');
console.log(birthday); // 1997-05-12T00:00:00.000Z
```

You can then access the different parts of a date:

```js
const today = new Date();

console.log(today.getFullYear()); // Year, e.g., 2025
console.log(today.getMonth());    // Month, 0 = January
console.log(today.getDate());     // Day of the month
console.log(today.getDay());      // Day of the week, 0 = Sunday
console.log(today.getHours());    
console.log(today.getMinutes());
console.log(today.getSeconds());
```

You can use ``tooString()`` to get the String:

```js 
const now = new Date();
console.log(now.toString());  
```

## Fetch

A fetch request using .then could look like this:

```js
    fetch("/api/matches")
    .then((response) => response.json())
    .then((result) => {
        dogs = result.data;
    });
```