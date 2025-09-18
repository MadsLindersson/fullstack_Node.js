const express = require(`express`);
const app = express();



// virker ikke
app.get("/dates/month", (req, res) => {
    const thisMonth = new Date().getMonth() + 1;
    const formatter = new Intl.DateTimeFormat(`en`, { month: `long`});

    res.send({ data: formatter.format(thisMonth) });
});

app.get("/dates/day", (req, res) => {
    //const today = new Date().getDay();

    const today = new Date().toLocaleDateString("en-uk", {weekday: "long"});

    res.send({ data: today });
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);

});