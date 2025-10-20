### Enviroment variables

You can define enviroment variables natively in Node.js. You can do this in the terminal if you wish or you can set it up as a script in your package.json to run everytime you start the server. 

**In bash:**

``export PORT=8080 node app.js``

**In powershell:**

``$env:PORT=8080 node app.js``

**As a script in your package.json**

``cross-env PORT=8080 nodemon.cmd app.js``

All of the above examples sets an enviromental variable called PORT with the value of 8080. But the terminal commands only works as long as that terminal is opened, when closed, the variable dissapears. Using the script, you wont loose the variable.

You can then use the enviroment variable like this:

```js
process.env.PORT //8080
```

## Fetching in the client vs fetching in the backend

Fetching in the client is good for easy simple requests where there is no need for a backend intermidiary. But it can give issues because you can't hide API keys and secrets like tokens and passwords. It can also give CORS issues. 

Fetching with the backend, makes it possible to hide API keys and secrets. There is also no CORS issues because it's server to server. You can filter data before sending it to the frontend. There is a bit more setup, but the payout is high. 

**Client sided fetch**
```js
fetch("https://api.example.com/data")
  .then(res => res.json())
  .then(data => console.log(data));
```

**Backend sided fetch**
```js
// backend code (Express)
app.get("/my-data", async (req, res) => {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  res.send(data);
});
```

## HTML semantics

It is a good idea to structure HTML in a semantic way, using the tags as they were intended. This also helps with clean code instead of having everything in nested ``<div>``.

An example of HTML semantics:

```html
<header>
  <h1>My Website</h1>
  <nav>
    <a href="/">Home</a>
  </nav>
</header>

<main>
  <article>
    <h2>Blog Post Title</h2>
    <p>This is the content of the post.</p>
  </article>

    <p>Related links or sidebar content</p>
</main>

<footer>
  <p>© 2025 My Website</p>
</footer>
```


- Der kan laves scripts i package.js men det er ikke node scripts, det er terminal scripts der kan køres via node.
- miljøvariabler kan defineres ved "$set var=x"
- Vi kan i pakcage.json scripts bruge cross-env for at lave en miljøvariable sammen med at kører projektet f.eks. dev: "cross-env PORT=9090 nodemon.cmd.js" https://www.npmjs.com/package/cross-env
- 