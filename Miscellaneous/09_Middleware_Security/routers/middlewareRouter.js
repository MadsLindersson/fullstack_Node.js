import { Router } from 'express';

const router = Router();

function ipLogger(req, res, next) {
    console.log(req.ip);
    next();
}

function greeter(req, res, next)  {
    console.log("Hello");
    next();
}

router.use("/room", ipLogger);
router.use("/room", greeter);

router.get("/room", (req, res, next) => {
    //res.send({ data: "You are in room 1" });
    next();
});

router.get("/room", (req, res) => {
    res.send({ data: "You are in room 2" });
});




export default router;