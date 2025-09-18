const express = require("express");
const { greekGods, findGreekGodById, createGreekGod, updateGreekGod, deleteGreekGod } = require("./database");

const app = express(); 

app.use(express.json());

app.get("/greekGods", (req, res) => {
    res.send({ data:  greekGods });
});

app.get("/greekGods/:id", (req, res) => {
    const greekGodToSend = findGreekGodById(req.params.id, greekGods);

    if (!greekGodToSend) {
        res.status(404).send({ errorMessage: `Greek god not found by id ${req.params.id}` });
    } else {
        res.send({ data: greekGodToSend });
    };
})

app.post("/greekGods", (req, res) => {
    if (!req.body)  {
        return res.status(400).send({ errorMessage: "Requires a JSON body" });
    };
    res.send(createGreekGod(req.body));
    
});

app.put("/greekGods/:id", (req, res) => {
    res.send(updateGreekGod(req.body, Number(req.params.id)));
});

app.delete("/greekGods/:id", (req, res) => {
    res.send({ data: deleteGreekGod(Number(req.params.id)) })
});

// app.listen can be given a callback function in the second argument

//Altid i bunden
const PORT = 8080;
app.listen(PORT, (error) => {
    if (error) {
        console.log("Something went wrong", error);
        return;
    }
    console.log("Server is running on port", PORT);
});