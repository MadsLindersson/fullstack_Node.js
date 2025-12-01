import express from 'express';
const app = express();
app.use(express.json());

app.use(express.static('public'));

import excercisesRouter from './routers/excercisesRouter.js';
app.use(excercisesRouter);

import userRouter from './routers/usersRouter.js';
app.use(userRouter);


//multer code
import multer from 'multer';
const upload = multer({ dest: './uploads' });

app.post("/profile", upload.single('avatar'), (req, res) => {
    res.send({ data: "Image uploaded" });
});

const PORT = Number(process.env.PORT) || 8080;
app.listen((PORT), () => {
    console.log("The server har startet on port:", PORT);
});