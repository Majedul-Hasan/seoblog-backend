import express from "express";
import { time } from "../controllers/blogsCtrl.js";


const router = express.Router()

router.get('/', time)


export default router