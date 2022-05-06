import express from "express";
import { adminMiddleware, requiredSignin } from "../controllers/authCtrl.js";
import { runValidation } from "../validator/index.js";
import { categoryCreateValidator } from "../validator/categoryValidator.js";
import { createCategoryCtrl } from "../controllers/categoryCtrl.js";

const router = express.Router()

//import { createCategory } from "../controllers/categoryCtrl.js";



//    /api/category


router.post('/', categoryCreateValidator, runValidation,  requiredSignin, adminMiddleware,createCategoryCtrl )


export default router