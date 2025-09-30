import express from "express";
const app = express();

import path from "path";

app.use(express.static("public"));

// appen
//const candyCommon = require("./util/candyCommon.js");
import candyEsModule from "./util/candyESModule.js";
console.log(candyEsModule);

//Pages ---------------------------------------------------------------------------------
app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/frontend/index.html"));
});

app.get("/candy", (req, res) => {
    res.sendFile(path.resolve("public/candy/candy.html"));
});

app.get("/redirection", (req, res) => {
    res.sendFile(path.resolve("public/redirection/redirection.html"));
});

// API ----------------------------------------------------------------------------------
let visitorsCount = 0;

app.get("/visitorsCount", (req, res) => {
    res.send({ data: ++visitorsCount })
});

app.get("/visitorsDoorWay", (req, res) => {
    res.redirect("/visitorsCount");
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log("server is running on", PORT);
});