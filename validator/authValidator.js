import { check } from "express-validator";


export const userSignupValidator =[
    check('name').not().isEmpty().withMessage('name is required'),

    check('email').isEmail().withMessage('email is required'),
    check('password').isLength({min: 6}).withMessage('password must be at lest 6 cheracters long')



]


export const userSigninValidator =[
    //check('name').not().isEmpty().withMessage('name is required'),

    check('email').isEmail().withMessage('email is required'),
    check('password').isLength({min: 6}).withMessage('password must be at lest 6 cheracters long')



]