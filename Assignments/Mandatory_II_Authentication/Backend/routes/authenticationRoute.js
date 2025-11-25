import Router from 'express';
const router = Router();

import hashing from '../utilBackend/hashing.js';

import db from '../database/connection.js';

import { sendEmail } from "../utilBackend/resend.js";

// Middleware ====================================================================================
async function signIn (req, res, next)   {
    const { email, password } = req.body;

    const userPassword = await db.get('SELECT password FROM users WHERE email = ?', email);

    try {
        if (await hashing.comparePasswords(password, userPassword.password)) {
            req.session.email = email;
            return next();
        } else {
            res.status(401).send({ data: "signIn information is incorrect, please try again" });
        }
    } catch (error) {
        console.log("signIn error:", error);
        return res.status(500).send({ data: "Internal server error" });
    }
}

// Endpoints =====================================================================================

router.post("/auth/signIn", signIn, (req, res) => {    
    res.send({ sessionID: req.sessionID });
});

router.post("/createAccount", async (req, res) => {
    const {email, password} = req.body;
    const hashedPassword = await hashing.hashPassword(password);

    // This is not stopping the server from crashing when entering an email adress already existing in the db.
    try {
        db.run('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword]);

            await sendEmail(
            email,
            "Welcome to authManII!",
            `<h1>Welcome!</h1><p>Your account has been created.</p>`
        );
    } catch (error)  {
        return res.status(500).send({ data: "Something went wrong", error })
    }

    return res.status(201).send({ data: "Account has been created" });
});

router.delete("/signOut", (req, res) => {
    req.session.destroy(error => {
        if (error)  {
            res.status(500).send({ data: "Sign out failed" })
        } else {
            res.send({ data: "Signed out succesfully" });
        }
    });
});

export default router;