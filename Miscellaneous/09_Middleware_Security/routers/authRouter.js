import Router from 'express';
const router = Router();

function isAdmin(req, res, next)  {
    const isAdmin = true;
    if (isAdmin) {
        req.isAdmin = isAdmin;
        req.username = "John";
        next();
    } else {
        res.status(403).send({ data: "You need to be an admin to access this route" });
    }
}

router.get("/auth/secretRoute", isAdmin, (req, res) => {
    console.log(req.isAdmin, req.username);
    
    res.send({ data: "Some secret data" });
});

export default router;