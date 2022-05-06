import express from "express";
import { signupCtrl, signinCtrl, requiredSignin, signoutCtrl, authMiddleware } from "../controllers/authCtrl.js";

// validation
import { userSigninValidator, userSignupValidator } from "../validator/authValidator.js";
import { runValidation } from "../validator/index.js";




const router = express.Router()

router.post('/signup', userSignupValidator, runValidation,  signupCtrl)
router.post('/signin', userSigninValidator, runValidation,  signinCtrl)
router.get('/signout', signoutCtrl)


/**test */

router.get('/secret', requiredSignin, authMiddleware, (req, res)=>{
   
    
    res.json ({
         user: req.auth
    })

})







export default router