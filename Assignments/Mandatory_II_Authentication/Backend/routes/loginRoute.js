import Router from 'express';
const router = Router();

import hashing from '../utilBackend/hashing.js';

async function login (req, res, next)   {
    const { email, password } = req.body;

    // TODO: Skal tjekkes mod en DB 
    if (email === "mads@admin.com" && await hashing.comparePasswords(password)) {
        next();
    } else {
        res.status(401).send({ data: "Login information is incorrect, please try again" });
    }
}

router.post("/login", login, (req, res) => {
    res.send({ data: "Login endpoint" });
});

export default router;