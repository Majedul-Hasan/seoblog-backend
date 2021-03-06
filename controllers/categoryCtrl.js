import Category from "../Models/CategoryModels.js";

import slugify from "slugify";
import { dbErrorHandler } from "../helpers/dbErrorHandler.js";



/**
 * 
 export const createCategoryCtrl = (req, res) => {
    const { name } = req.body;
    let slug = slugify(name).toLowerCase();

    let category = new Category({ name, slug });

    category.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: dbErrorHandler(err)
            });
        }
        res.json(data);
    });
};

 */
export const createCategoryCtrl = (req, res) => {
    const { name } = req.body;
    let slug = slugify(name).toLowerCase();

    let category = new Category({ name, slug });

    category.save(function(err, result){
    if(err){

        console.log(err);
         res.send(err);
    }
    else {

         
        console.log(result);
        //req.session.user = result;
        res.send({"code":200,"message":"Record inserted successfully"});
    }
});
};


/**
 * 
 user({'local.email' : req.body.email, 'local.password' : req.body.password}).save(function(err, result){
    if(err)
        res.send(err);
    else {
        console.log(result);
        req.session.user = result;
        res.send({"code":200,"message":"Record inserted successfully"});
    }
}); 
 */


export const categoryListCtrl = (req, res) => {
    Category.find({}).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: dbErrorHandler(err)
            });
        }
        res.json(data);
    });
};



export const categoryReadCtrl = (req, res) => {
    const slug = req.params.slug.toLowerCase();

    Category.findOne({ slug }).exec((err, category) => {
        if (err) {
            return res.status(400).json({
                error: dbErrorHandler(err)
            });
        }
        res.json(category);
    });
};


export const categoryRemoveCtrl = (req, res) => {
    const slug = req.params.slug.toLowerCase();

    Category.findOneAndRemove({ slug }).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            message: 'Category deleted successfully'
        });
    });
};
