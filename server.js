import express from "express"
import morgan from "morgan"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from "mongoose"

//bring routes
import blogRoutes from './routes/blogRoutes.js'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'




dotenv.config()

// app
const app = express()

// datbase 


mongoose
    .connect(process.env.DATABASE_LOCAL,{})
    .then(()=>console.log('db connected'))


// middlewares

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
// cors
if(process.env.NODE_ENV=== 'development' ){
    app.use(cors({origin: `${process.env.CLIENT_URL}`}))
}


// middlewares
// routes middlewares

app.use('/api/blog', blogRoutes)
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)


// routes middlewares



// routes 

app.get('/api', (req, res)=>{
    res.json({time: Date().toString()})
} )


//port

const PORT = process.env.PORT || 8000

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    
})

