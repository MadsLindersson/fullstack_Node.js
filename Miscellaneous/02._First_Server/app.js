const express = require(`express`);
const app = express();

// const app = require("express")();

//sets up body parsing
app.use(express.json());


    // endpoint +
    // callback function
// route (handler)
app.get("/", (req, res) => {
    res.send();
});

app.get("/plantes", (req, res) => {
    res.send({
        name: "Jupiter"
    });
});

// Task: create /plantes/favoritePlanet that returns your favorite planet

app.get("/planets/favoritePlanet", (req, res) => {
    res.send({
        favoritePlanet: "Uranus"
    });
});

                    // Path variable
app.get("/waterfalls/:likingScore", (req, res) => {
    console.log(req.params);
    // Respond with "you like watfalls this much: likingScore"
    res.send({
        Message: `You like waterfalls this much, ${req.params.likingScore}`
    });
});

// Task: create a /bag route that can take two path variables where thee client can define what should go in it, then respondwhat that bag contains.

// task: create a GET/url route, create a query string with the length of "medium" and spiciness level of 6
// http://localhost:8080/urls?length=medium&spicines=6

app.get("/urls", (req, res) => {
    console.log(req.query);
    
    res.send({ data: req.query });
});

app.post("/subjects", (req, res) => {
    console.log(req.body);
    res.send({ data: req.body});
    
});

console.log(__dirname);

app.get("/fashionBrands", (req, res) => {
    res.sendFile(__dirname + `/index.html`);
});

// task: create a POST fashion brands and try sending a new fashion brand

app.post("/fashionBrands", (req, res) => {
    res.send(req.body);
    
});

app.get("/proxy", (req, res) => {
    //Make a request to google and serve it to the client
    fetch("https://www.google.com")
    .then((response) =>  response.text())
    .then((result) => res.send(result)); 
}); 

        // http developer port
app.listen(8080);