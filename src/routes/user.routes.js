import { Router} from "express";
import { getUsers , getUserProfile} from "../controllers/user.controller.js";
import {isSuperAdmin} from "../middlewares/isSuperAdmin.js";

const router = Router();

router.get('/' , isSuperAdmin , getUsers);
router.get('/profile' , getUserProfile);
// router.put('/profile' , updateUserProfile);

export default router; 
