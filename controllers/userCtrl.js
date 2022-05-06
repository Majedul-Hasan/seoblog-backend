import User from "../Models/UserModels.js"
import shortId  from "shortid";

import jwt from "jsonwebtoken";
import expressJwt  from "express-jwt";

import dotenv from "dotenv";

dotenv.config()


export const read = (req, res)=>{


    //console.log("before ", req.profile);  


    req.profile.hashed_password = undefined

    //console.log("after", req.profile);
    

    return res.json(req.profile)
}


