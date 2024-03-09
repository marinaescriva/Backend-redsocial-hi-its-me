import { Router} from "express";
import { getUsers , getUserProfile, updateUserProfile} from "../controllers/user.controller.js";
import {isSuperAdmin} from "../middlewares/isSuperAdmin.js";
import {auth} from "../middlewares/auth.js";

const router = Router();

router.get( '/' , auth, isSuperAdmin , getUsers);
router.get('/profile' , auth ,  getUserProfile);
router.put('/profile' , auth , isSuperAdmin, updateUserProfile);
// router.delete('/:id',auth, deleteUserById)
// router.put('/:id/role', updateUserRole)

export default router; 
