import Router from 'express';
const router = Router();

import { sessionCheck } from '../utilBackend/sessionCheck.js';

router.get("/fetchEmail", sessionCheck, (req, res) => {
    //TODO: Sende brugerens email til mainPage.
    res.status(200).send({ email: req.session.email});
});

export default router;