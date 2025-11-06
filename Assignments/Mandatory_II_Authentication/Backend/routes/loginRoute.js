import Route  from 'express';
const router = Route();

router.get("/login", (req, res) => {
    res.send({ data: "Login endpoint" });
});

export default router;