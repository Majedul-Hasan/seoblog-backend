import Category from "../Models/CategoryModels.js";

import slugify from "slugify";
import { dbErrorHandler } from "../helpers/dbErrorHandler.js";




export const createCategoryCtrl = (req, res)=>{
    const {name} = req.body
    console.log(req.body);
    

    let slug = slugify(name).toLowerCase()

    let category = new Category({name, slug})

    category.save((err, data)=>{
        if(err){
            return res.status(400).json({
                error: dbErrorHandler(err)
            })
        }
        res.json(data)
    })


}