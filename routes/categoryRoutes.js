import express from "express";
import { adminMiddleware, requiredSignin } from "../controllers/authCtrl.js";
import { runValidation } from "../validator/index.js";
import { categoryCreateValidator } from "../validator/categoryValidator.js";
import { categoryListCtrl, categoryReadCtrl, categoryRemoveCtrl, createCategoryCtrl } from "../controllers/categoryCtrl.js";

const router = express.Router()

//import { createCategory } from "../controllers/categoryCtrl.js";



//    /api/category


router.post('/', categoryCreateValidator, runValidation,  requiredSignin, adminMiddleware, createCategoryCtrl )
router.get('/', categoryListCtrl )   // all categories
router.get('/:slug', categoryReadCtrl )
router.delete('/:slug', requiredSignin, adminMiddleware,  categoryRemoveCtrl )


//router.route('/').post(categoryCreateValidator, runValidation, requiredSignin, adminMiddleware, createCategoryCtrl)


export default router