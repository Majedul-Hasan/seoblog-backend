import express from "express";
import { signupCtrl, signinCtrl } from "../controllers/authCtrl.js";

// validation
import { userSigninValidator, userSignupValidator } from "../validator/authValidator.js";
import { runValidation } from "../validator/index.js";




const router = express.Router()

router.post('/signup', userSignupValidator, runValidation,  signupCtrl)
router.post('/signin', userSigninValidator, runValidation,  signinCtrl)



export default router