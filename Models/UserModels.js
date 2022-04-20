import mongoose from "mongoose";



const userSchema = new mongoose.Schema({
    username:{
        type : String,
        trim: true, //white space tremed out
        required: true,
        max: 32,
        unique:true,
        index: true, //make it indexing
        lowercase: true

    },
    name:{
        type : String,
        trim: true, //white space tremed out
        required: true,
        max: 32,
    },
    email:{
        type : String,
        trim: true, //white space tremed out
        required: true,
       
        unique:true,
        
        lowercase: true

    },
    profile:{
        type : String,
       
        required: true       

    },
    hashed_password :{
        type : String,
       
        required: true 
    },
    salt:{
        type: String

    },
    about:{
        type: String
        
    },
    role:{
        type: Number,
        trim: true

    },
    photo:{
        data: Buffer,
        contentType: String
    },
    resetPasswordLing:{
        data: String,
        default:''
    }

},
{
    timestamps: true
})

const User = mongoose.model("User", userSchema)



export default User