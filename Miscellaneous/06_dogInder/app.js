import express from 'express';
import matchesRouter from './routers/matchesRouter.js';
import pagesRouter from './routers/pagesRouter.js'
import contactRouter from './routers/contactRouter.js'

const app = express();

app.use(express.urlencoded());

app.use(matchesRouter, pagesRouter, contactRouter);

app.use(express.static("public"));

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
    console.log('Server is runnning on ', PORT);
});

