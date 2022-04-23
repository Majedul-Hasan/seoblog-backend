import User from "../Models/UserModels.js"
import shortId  from "shortid";

import jwt from "jsonwebtoken";
import expressJwt  from "express-jwt";





export const signupCtrl = (req, res)=>{

    User.findOne({email: req.body.email}).exec((err, user)=>{
        if(user){
            return res.status(400).json({
                error: 'email is taken'
            })
        }


        const {
        name,
        email,
        password
            } = req.body 
        
        let username = shortId.generate()

        let profile = `${process.env.CLIENT_URL}/profile/${username}`

        let newUser = new User({
            name,
            email,
            password,
            profile,
            username
        })
        newUser.save((err, success)=>{
            if(err){
                return res.status(400).json({
                    error: err
                })
            }

            //res.json({
            //   user: success
            //})


            res.json({
                message: 'Signup success! please Signin.'
            })

        })        
    })

   
}


export const signinCtrl = (req, res)=>{
    
     const {   
        email,
        password
            } = req.body 
            
    // if user exists
     User.findOne({email: req.body.email}).exec((err, user)=>{
         if(err|| !user){
            return res.status(400).json({
                error: 'user with this email does not exist. please signup'
            })
        }
        
        
        
    // authenticate

    if(!user.authenticate(password)){
        return res.status(400).json({
                error: 'email and password not match'
            })
    }

    // generate jwr send to  client

    const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, {expiresIn: '1d'})

    res.cookie('token', token, {expiresIn: '1d'})
    const {_id, username, name,  role} = user
    return res.json({
        token, user
    })

})  

   
}
