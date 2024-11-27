import express from 'express'
import dotenv from 'dotenv'
import userRouter from './routes/UserRouter.js';
import connection from './db/db.js';
import cors from 'cors'
import getStudentsRouter from './routes/getStudentsRouter.js'
const app = express();
dotenv.config();
const PORT = process.env.PORT

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api/user',userRouter)
app.use('/api/students',getStudentsRouter);
app.get('/',(req,res)=>{
  res.send("This is the main page")
})

app.listen(PORT,()=>console.log(`listen on port : ${PORT}`)
)