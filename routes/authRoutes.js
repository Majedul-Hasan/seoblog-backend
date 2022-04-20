import express from "express";
import { signupCtrl } from "../controllers/authCtrl.js";

// validation
import { userSignupValidator } from "../validator/authValidator.js";
import { runValidation } from "../validator/index.js";




const router = express.Router()

router.post('/signup', userSignupValidator, runValidation,  signupCtrl)


export default router