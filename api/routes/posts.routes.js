import express from 'express';
import { addPost } from '../controllers/posts.controller.js';

const router = express.Router();

router.get("/", (req, res) => {
    console.log("connected to routes");
    res.send("connected kana");
});

export default router;