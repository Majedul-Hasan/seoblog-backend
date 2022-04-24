import express from "express";
import { signupCtrl, signinCtrl, requiredSignin, signoutCtrl } from "../controllers/authCtrl.js";

// validation
import { userSigninValidator, userSignupValidator } from "../validator/authValidator.js";
import { runValidation } from "../validator/index.js";




const router = express.Router()

router.post('/signup', userSignupValidator, runValidation,  signupCtrl)
router.post('/signin', userSigninValidator, runValidation,  signinCtrl)
router.get('/signout', signoutCtrl)

router.get('/secret', requiredSignin, (req, res)=>{
    res.json ({
         message: 'you have access to secret page'
    })

})







export default router