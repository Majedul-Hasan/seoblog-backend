import express from "express";
import {  requiredSignin, authMiddleware, adminMiddleware } from "../controllers/authCtrl.js";
import { read } from "../controllers/userCtrl.js";



const router = express.Router()

//    /api/users

//router.get('/profile', requiredSignin, authMiddleware, read);
router.get('/profile', requiredSignin, adminMiddleware, read);



/**test */

router.get('/secret', requiredSignin, authMiddleware, (req, res)=>{
   
    
    res.json ({
         user: req.auth
    })

})







export default router