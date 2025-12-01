import Router from 'express';
import db from '../database/connection.js';

const router = Router();

router.post("/api/users", async (req, res) => {
    const { username, role } = req.body;
    const result = await db.run('INSERT INTO users (username, role) VALUES (?, ?)', [username, role]);
    console.log(result);
    
    res.send({ data: {createdId: result.lastID} });
});

export default router;