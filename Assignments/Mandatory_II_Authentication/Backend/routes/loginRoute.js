import Router from 'express';
const router = Router();

import hashing from '../utilBackend/hashing.js';

async function login (req, res, next)   {
    const { email, pw } = req.body;

    // TODO: Skal tjekkes mod en DB 
    try {
        if (email === "mads@admin.com" && await hashing.comparePasswords(pw)) {
            return next();
        } else {
            res.status(401).send({ data: "Login information is incorrect, please try again" });
        }
    } catch (error) {
        console.log("Login error:", error);
        return res.status(500).send({ data: "Internal server error" });
    }
}

router.post("/login", login, (req, res) => {
    res.send({ data: "Login endpoint" });
});

export default router;