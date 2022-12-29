import express, { Router } from 'express';
import { getPosts, createPost, updatePost, findPost, deletedPost } from '../controllers/PostController';

const router: Router = express.Router()


router.get('/', getPosts)

router.post('/', createPost)

router.put('/:id', updatePost)

router.delete('/:id', deletedPost)

router.get('/:id', findPost)



export default router

