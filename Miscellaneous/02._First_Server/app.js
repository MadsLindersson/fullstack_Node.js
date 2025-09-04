const express = require(`express`);
const app = express();

// const app = require("express")();

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

        // http developer port
app.listen(8080);