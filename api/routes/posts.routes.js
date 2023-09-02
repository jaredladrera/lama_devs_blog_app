 import express from 'express';
import { addPost, deletePost, getPostById, getPosts, updatePost } from '../controllers/posts.controller.js';

const router = express.Router();

router.get("/", getPosts);

router.get('/:id', getPostById);

router.delete('/:id', deletePost);

router.post("/", addPost);

router.put('/:id', updatePost);

export default router;