import expres from 'express';
const app = expres();

import path from 'path';

app.use(expres.static("public"));

//Pages ---------------------------------------------------------------------------------
app.get("/", (req, res) => {
    res.sendFile(path.resolve('public/frontend/index.html'));
});

app.get("/matches", (req, res) => {
    res.sendFile(path.resolve("public/matches/matches.html"));
});

//API -----------------------------------------------------------------------------------
const PORT = 8080;
app.listen(PORT, () => {
    console.log('Server is runnning on ', PORT);
});

