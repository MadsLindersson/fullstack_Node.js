import { Router } from 'express';
const router = Router();

router.get("/addIcecream", (req, res) => {
    req.session.flavor = "Chocolate Caramel";
    req.session.amount = 5;
    
    res.send({ flavor: req.session.flavor, amount: req.session.amount });
});

router.get("/eatIcecream", (req, res) => {
    req.session.amount--;
    if (!req.session.flavor)    {
        return res.send({ message: "The shop does not exist yet" });
    };

    if (!req.session.amount)   {
        return res.send({ message: "Ran out of icecream" })
    };
    
    res.send({ flavor: req.session.flavor, amount: req.session.amount });
});

router.get("/closeShop", (req, res) => {
    req.session.destroy(() => {
        res.send({ message: "The shop has been closed down" });
    })
});

export default router;