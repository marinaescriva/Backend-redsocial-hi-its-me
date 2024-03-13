import { Router} from "express";
import { auth } from "../middlewares/auth.js";
import { createPost, deletePost, getAllPost, getMyOwnPost, getPostById, updatePost} from "../controllers/post.controller.js";


const router = Router();

router.post('/', auth, createPost);
router.delete('/:id' , auth, deletePost);
router.put('/:id' , auth, updatePost);
router.get('/own' ,auth, getMyOwnPost);
router.get('/' , auth, getAllPost);
router.get('/:id' , auth, getPostById);


export default router;  