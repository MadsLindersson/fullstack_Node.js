const express = require("express");
const app = express();
app.use(express.json());
const service = require("./service")


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
    //res.send({ data: service.minutesSinceMidnight()})
});

app.post("/guess", (req, res) => {
    console.log(service.minutesSinceMidnight());
    res.send({ data: service.guessVsActual(Number(req.body.guess)) });
    
});

module.exports = app;

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server on port ${PORT} running`);
});

