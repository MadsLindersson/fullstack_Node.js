const express = require("express");
const app = express();
app.use(express.json());
const service = require("./service")


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/guess", (req, res) => {
    res.send({ data: service.guessVsActual(Number(req.body.guess)) });
    
});

app.post("/MinutesSinceMidnight", (req, res) => {
    service.setMinutesSinceMidnight(Number(req.body.minutesSinceMidnight));
});

//module.exports = app;

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server on port ${PORT} running`);
});

