import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

// localhost:3001/posts because we added /posts to it inside index.js
router.get('/', getPosts);
router.post('/', createPost);

export default router;