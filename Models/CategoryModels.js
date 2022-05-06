import mongoose from "mongoose";



const categorySchema = new mongoose.Schema({
    
    name:{
        type : String,
        trim: true, //white space tremed out
        required: true,
        max: 32,
    },
    slog:{
        type : String,       
        unique:true,        
        index: true

    },

},
{
    timestamps: true
})








const Category = mongoose.model("Category", categorySchema)



export default Category