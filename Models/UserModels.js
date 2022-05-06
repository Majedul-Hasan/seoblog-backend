import mongoose from "mongoose";
import crypto from 'crypto';  // crypto is a built-in Node module


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
        default: 0

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



userSchema.virtual("password")
    .set(function(password){                                //set method
        // a temporary variable "_password" 
        this._password = password

        // generate salt
        this.salt = this.makeSalt()

        //encript password

        this.hashed_password = this.encryptPassword(password)   // set this hashed_password by #encryptPassword method

    })                            
    .get(function(){                                        //get method
        return this._password                                       

    })                       

userSchema.methods = {
    authenticate: function(plainText){
        return this.encryptPassword(plainText) === this.hashed_password

    },
        encryptPassword: function(password){
        if(!password) return ""

        try {
            return crypto
                .createHmac('sha1', this.salt)
                .update(password)
                .digest('hex')
            
        } catch (err) {
            return ""

            
        }
    },

    makeSalt: function(){
        return Math.round(new Date().valueOf()*Math.random()) + "";
    }


}






const User = mongoose.model("User", userSchema)



export default User