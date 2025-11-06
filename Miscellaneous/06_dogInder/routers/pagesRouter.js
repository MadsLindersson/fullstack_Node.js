import { Router } from 'express';
import { matchesPagePage, frontPagePage, contactPage } from '../util/pagesUtil.js'


const router = Router();

router.get("/", (req, res) => {
    res.send(frontPagePage);
});

router.get("/matches", (req, res) => {
    res.send(matchesPagePage);
});

router.get("/contact", (req, res) => {
    res.send(contactPage);
});

export default router;